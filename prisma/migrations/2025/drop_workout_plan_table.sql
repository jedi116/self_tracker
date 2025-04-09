ALTER TABLE public."Workout" DROP CONSTRAINT "Workout_planId_fkey";

ALTER TABLE public."Workout" DROP COLUMN "planId";


DROP TABLE public."WorkoutPlan"


ALTER TABLE public."Workout"
    ADD COLUMN "goalId" text COLLATE pg_catalog."default" NOT NULL;

ALTER TABLE public."Workout"
    ADD CONSTRAINT "Workout_goalId_fkey" FOREIGN KEY ("goalId")
        REFERENCES public."WorkoutGoal" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;