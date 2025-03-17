-- Table: public.WorkoutGoal

-- DROP TABLE IF EXISTS public."WorkoutGoal";

CREATE TABLE IF NOT EXISTS public."WorkoutGoal"
(
    id text PRIMARY KEY COLLATE pg_catalog."default" NOT NULL ,
	"userId" text COLLATE pg_catalog."default" NOT NULL,
    name  text COLLATE pg_catalog."default" NOT NULL,
	"weightGoal"  text COLLATE pg_catalog."default" NOT NULL ,
	"bodyFatGoal"  text COLLATE pg_catalog."default" NOT NULL,
	"description"  text COLLATE pg_catalog."default" NOT NULL,
	"beginDate" date NOT NULL,
	"endDate" date NOT NULL,
    CONSTRAINT "WorkoutGoal_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."User" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."WorkoutGoal"
    OWNER to postgres;
-- Index: WorkoutGoal_name_userId_key

-- DROP INDEX IF EXISTS public."WorkoutGoal_name_userId_key";

CREATE UNIQUE INDEX IF NOT EXISTS "WorkoutGoal_name_userId_key"
    ON public."WorkoutGoal" USING btree
    (name COLLATE pg_catalog."default" ASC NULLS LAST, "userId" COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

