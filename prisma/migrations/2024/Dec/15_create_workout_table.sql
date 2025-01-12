-- Table: public.Workout

-- DROP TABLE IF EXISTS public."Workout";

CREATE TABLE IF NOT EXISTS public."Workout"
(
    id text PRIMARY KEY COLLATE pg_catalog."default" NOT NULL ,
    "planId" text COLLATE pg_catalog."default" NOT NULL,
    name  text COLLATE pg_catalog."default",
    "description" text COLLATE pg_catalog."default",
    "sets" int,
    "reps" int,
    "duration" text COLLATE pg_catalog."default",
    CONSTRAINT "Workout_planId_fkey" FOREIGN KEY ("planId")
    REFERENCES public."WorkoutPlan" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Workout"
    OWNER to postgres;
-- Index: Workout_name_key

-- DROP INDEX IF EXISTS public."Workout_name_key";

CREATE INDEX IF NOT EXISTS "Workout_name_key"
    ON public."Workout" USING btree
    (name COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

ALTER TABLE public."Workout"
ADD CONSTRAINT "unique_id" UNIQUE (id);

ALTER TABLE public."Workout"
ADD COLUMN workoutDate date NOT NULL DEFAULT CURRENT_TIMESTAMP;


ALTER TABLE public."Workout"
    ADD COLUMN userId text COLLATE pg_catalog."default";

ALTER TABLE public."Workout"
    ADD CONSTRAINT "Workout_userId_fkey" FOREIGN KEY (userId)
        REFERENCES public."User" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;