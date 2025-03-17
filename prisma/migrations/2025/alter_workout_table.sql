ALTER TABLE public."Workout"
    ADD CONSTRAINT "Workout_name_fkey" FOREIGN KEY ("name")
        REFERENCES public."WorkoutTypes" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;


CREATE INDEX IF NOT EXISTS "Workout_name_idx"
    ON public."Workout" USING btree ("name");