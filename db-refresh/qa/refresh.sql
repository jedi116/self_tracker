-- Create the new schema
CREATE SCHEMA qa;

-- STEP 1: COPY TABLE STRUCTURES WITHOUT DATA FROM PUBLIC schema to QA
DO $$
DECLARE r RECORD;
BEGIN
FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public')
  LOOP
    EXECUTE FORMAT(
      'CREATE TABLE qa.%I (LIKE public.%I INCLUDING ALL);',
      r.tablename, r.tablename
    );
    -- Truncate the table to remove any data that might have been copied
EXECUTE FORMAT('TRUNCATE TABLE qa.%I;', r.tablename);
END LOOP;
END $$;

-- STEP 2: COPY ALL VIEWS FROM PUBLIC schema to QA
DO $$
DECLARE r RECORD;
BEGIN
FOR r IN (SELECT viewname, definition FROM pg_views WHERE schemaname = 'public')
  LOOP
    EXECUTE FORMAT('CREATE VIEW qa.%I AS %s', r.viewname, r.definition);
END LOOP;
END $$;

-- STEP 3: COPY ALL FUNCTIONS AND PROCEDURES FROM PUBLIC schema to QA
DO $$
DECLARE r RECORD;
BEGIN
FOR r IN (
    SELECT proname, pg_get_functiondef(oid) AS definition
    FROM pg_proc
    WHERE pronamespace = 'public'::regnamespace
)
  LOOP
    EXECUTE REPLACE(r.definition, 'public.', 'qa.');
END LOOP;
END $$;

-- STEP 4: COPY ALL SEQUENCES FROM PUBLIC schema to QA
DO $$
DECLARE r RECORD;
BEGIN
FOR r IN (
    SELECT sequencename
    FROM pg_sequences
    WHERE schemaname = 'public'
)
  LOOP
    EXECUTE FORMAT(
      'CREATE SEQUENCE qa.%I;',
      r.sequencename
    );

    -- Set the sequence to the current value from public
EXECUTE FORMAT(
        'SELECT setval(''qa.%I'', (SELECT last_value FROM public.%I));',
        r.sequencename, r.sequencename
        );
END LOOP;
END $$;

-- STEP 5: COPY ALL TRIGGERS FROM PUBLIC schema to QA
DO $$
DECLARE r RECORD;
BEGIN
FOR r IN (
    SELECT tgname, pg_get_triggerdef(oid) AS definition
    FROM pg_trigger
    WHERE tgrelid IN (SELECT oid FROM pg_class WHERE relnamespace = 'public'::regnamespace AND relkind = 'r')
      AND NOT tgisinternal
)
  LOOP
    EXECUTE REPLACE(r.definition, 'public.', 'qa.');
END LOOP;
END $$;

-- STEP 6: COPY ADDITIONAL INDEXES NOT CREATED BY 'INCLUDING ALL'
DO $$
DECLARE
r RECORD;
    index_exists BOOLEAN;
BEGIN
FOR r IN (
    SELECT indexname, indexdef, tablename
    FROM pg_indexes
    WHERE schemaname = 'public'
)
  LOOP
    -- Check if this index already exists in the qa schema
    EXECUTE FORMAT('
        SELECT EXISTS (
            SELECT 1 FROM pg_indexes
            WHERE schemaname = ''qa'' AND indexname = %L
        )', r.indexname) INTO index_exists;

    -- Only create the index if it doesn't already exist
    IF NOT index_exists THEN
BEGIN
EXECUTE REPLACE(r.indexdef, ' ON public.', ' ON qa.');
EXCEPTION WHEN duplicate_table THEN
            RAISE NOTICE 'Index "%" already exists, skipping', r.indexname;
END;
END IF;
END LOOP;
END $$;

-- STEP 7: EXPLICITLY COPY FOREIGN KEY CONSTRAINTS
DO $$
DECLARE
fk_rec RECORD;
BEGIN
FOR fk_rec IN (
        SELECT
            con.conname AS constraint_name,
            cl.relname AS table_name,
            con.conrelid::regclass AS table_regclass,
            pg_get_constraintdef(con.oid) AS constraint_definition
        FROM
            pg_constraint con
            JOIN pg_class cl ON con.conrelid = cl.oid
            JOIN pg_namespace ns ON cl.relnamespace = ns.oid
        WHERE
            con.contype = 'f' AND
            ns.nspname = 'public'
    )
    LOOP
BEGIN
            -- Extract constraint definition and replace schema reference
EXECUTE FORMAT(
        'ALTER TABLE qa.%I ADD CONSTRAINT %I %s',
        fk_rec.table_name,
        fk_rec.constraint_name,
        REPLACE(
                REGEXP_REPLACE(
                        fk_rec.constraint_definition,
                        'REFERENCES public\.',
                        'REFERENCES qa.'
                ),
                'REFERENCES ',
                'REFERENCES qa.'
        )
        );
EXCEPTION WHEN duplicate_object THEN
            RAISE NOTICE 'Foreign key constraint "%" already exists, skipping', fk_rec.constraint_name;
END;
END LOOP;
END $$;

-- STEP 8: TEMPORARILY DISABLE ALL CONSTRAINTS IN QA SCHEMA
DO $$
DECLARE
r RECORD;
BEGIN
    -- Disable all foreign key constraints in qa schema
FOR r IN (
        SELECT con.conname AS constraint_name, cl.relname AS table_name
        FROM pg_constraint con
        JOIN pg_class cl ON con.conrelid = cl.oid
        JOIN pg_namespace ns ON cl.relnamespace = ns.oid
        WHERE con.contype = 'f' AND ns.nspname = 'qa'
    )
    LOOP
        EXECUTE FORMAT('ALTER TABLE qa.%I DROP CONSTRAINT %I;',
                       r.table_name, r.constraint_name);
END LOOP;
END $$;

-- STEP 9: COPY ALL TABLE DATA FROM PUBLIC schema to QA
DO $$
DECLARE r RECORD;
BEGIN
FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public')
  LOOP
BEGIN
EXECUTE FORMAT(
        'INSERT INTO qa.%I SELECT * FROM public.%I;',
        r.tablename, r.tablename
        );
EXCEPTION WHEN others THEN
            RAISE NOTICE 'Error copying data to table qa.%: %', r.tablename, SQLERRM;
END;
END LOOP;
END $$;

-- STEP 10: RECREATE ALL CONSTRAINTS AFTER DATA LOADING
DO $$
DECLARE
fk_rec RECORD;
BEGIN
FOR fk_rec IN (
        SELECT
            con.conname AS constraint_name,
            cl.relname AS table_name,
            con.conrelid::regclass AS table_regclass,
            pg_get_constraintdef(con.oid) AS constraint_definition
        FROM
            pg_constraint con
            JOIN pg_class cl ON con.conrelid = cl.oid
            JOIN pg_namespace ns ON cl.relnamespace = ns.oid
        WHERE
            con.contype = 'f' AND
            ns.nspname = 'public'
    )
    LOOP
BEGIN
            -- Extract constraint definition and replace schema reference
EXECUTE FORMAT(
        'ALTER TABLE qa.%I ADD CONSTRAINT %I %s',
        fk_rec.table_name,
        fk_rec.constraint_name,
        REPLACE(
                REGEXP_REPLACE(
                        fk_rec.constraint_definition,
                        'REFERENCES public\.',
                        'REFERENCES qa.'
                ),
                'REFERENCES ',
                'REFERENCES qa.'
        )
        );
EXCEPTION WHEN duplicate_object THEN
            RAISE NOTICE 'Foreign key constraint "%" already exists, skipping', fk_rec.constraint_name;
END;
END LOOP;
END $$;