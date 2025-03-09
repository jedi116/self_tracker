CREATE TABLE IF NOT EXISTS public."WorkoutTypes"(
                                                    id 	  text   PRIMARY KEY COLLATE pg_catalog."default" NOT NULL ,
                                                    "name"  text COLLATE pg_catalog."default",
                                                    "userId" text COLLATE pg_catalog."default",
                                                    CONSTRAINT "WorkoutTypes_userId_fkey" FOREIGN KEY ("userId")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE

    )

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."WorkoutTypes"
    OWNER to postgres;

-- DROP INDEX IF EXISTS public."WorkoutTypes_name_key";

CREATE UNIQUE INDEX IF NOT EXISTS "WorkoutTypes_name_key"
    ON public."WorkoutTypes" USING btree
    ("name" COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
