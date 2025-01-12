-- Table: public.WorkoutPlan

-- DROP TABLE IF EXISTS public."WorkoutPlan";

CREATE TABLE IF NOT EXISTS public."WorkoutPlan"
(
    id text PRIMARY KEY COLLATE pg_catalog."default" NOT NULL ,
	"userId" text COLLATE pg_catalog."default" NOT NULL,
	"goalId" text COLLATE pg_catalog."default" NOT NULL,
    name  text COLLATE pg_catalog."default",
	"active" boolean NOT NULL,
    CONSTRAINT "WorkoutPlan_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."User" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,

	CONSTRAINT "WorkoutPlan_goalId_fkey" FOREIGN KEY ("goalId")
        REFERENCES public."WorkoutGoal" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."WorkoutPlan"
    OWNER to postgres;
-- Index: WorkoutPlan_name_key

-- DROP INDEX IF EXISTS public."WorkoutPlan_name_key";

CREATE UNIQUE INDEX IF NOT EXISTS "WorkoutPlan_name_key"
    ON public."WorkoutPlan" USING btree
    (name COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

