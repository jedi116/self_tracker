'use client';
import React, { createContext, useState, ReactNode } from 'react';
import WorkoutPlan from '@/types/WorkoutPlan';
import WorkoutGoal from '@/types/WorkoutGoal';
import Workout from '@/types/Workout';

type WorkoutFormContextType = {
  selectedPlan: WorkoutPlan | null;
  selectedGoal: WorkoutGoal | null;
  selectedWorkout: Workout | null;
  planFormType: 'create' | 'edit' | null;
  goalFormType: 'create' | 'edit' | null;
  workoutFormType: 'create' | 'edit' | null;
  setFormState?: React.Dispatch<React.SetStateAction<WorkoutFormContextType>>;
};

type WorkoutFormContextProviderProps = {
  children: ReactNode;
};

export const WorkoutFormContext = createContext<WorkoutFormContextType>({
  selectedPlan: null,
  selectedGoal: null,
  selectedWorkout: null,
  planFormType: 'create',
  goalFormType: 'create',
  workoutFormType: 'create',
});

export const WorkoutFormProvider = ({ children }: WorkoutFormContextProviderProps) => {
  const [formState, setFormState] = useState<WorkoutFormContextType>({
    selectedPlan: null,
    selectedGoal: null,
    selectedWorkout: null,
    planFormType: 'create',
    goalFormType: 'create',
    workoutFormType: 'create',
  });
  const momoizedContextValues = React.useMemo(() => ({ ...formState, setFormState }), [formState]);
  return (
    <WorkoutFormContext.Provider value={momoizedContextValues}>
      {children}
    </WorkoutFormContext.Provider>
  );
};
