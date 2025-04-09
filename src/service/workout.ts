import { prisma } from '@/prisma';
import Workout from '@/types/Workout';
import WorkoutGoal from '@/types/WorkoutGoal';
import { WorkoutTypes } from '@/types/WorkoutTypes';
import { Effect, pipe } from 'effect';

export class GetAllWorkoutsPrismaError extends Error {
  readonly _tag = 'GetAllWorkoutsPrismaError';
  constructor(message: string) {
    super(message);
  }
}

export class DeleteWorkoutsPrismaError extends Error {
  readonly _tag = 'DeleteWorkoutsPrismaError';
  constructor(message: string) {
    super(message);
  }
}

export const getAllWorkouts = (user: string | null | undefined) =>
  pipe(
    Effect.tryPromise({
      try: () =>
        prisma.workout.findMany({
          include: {
            WorkoutGoal: true,
          },
          where: {
            userid: user,
          },
          orderBy: {
            workoutdate: 'desc',
          },
        }),
      catch: error =>
        new GetAllWorkoutsPrismaError('Failed to get all workouts: \n' + JSON.stringify(error)),
    }),
    Effect.flatMap(data =>
      Effect.succeed(
        data.map(workout => {
          return {
            id: workout.id,
            name: workout.name,
            description: workout.description,
            sets: workout.sets,
            reps: workout.reps,
            duration: workout.duration,
            goalId: workout.WorkoutGoal.name,
            date: workout.workoutdate,
            userid: workout.userid,
          };
        })
      )
    )
  );

export const createWorkout = (workout: Workout) =>
  pipe(
    Effect.tryPromise(() =>
      prisma.workout.create({
        data: {
          name: workout.name,
          description: workout.description,
          sets: workout.sets,
          reps: workout.reps,
          duration: workout.duration,
          workoutdate: workout.date,
          goalId: workout.goalId as string,
          userid: workout.userid as string,
        },
      })
    ),
    Effect.flatMap(data => Effect.succeed({ data, message: 'successfully created workout' }))
  );

export const updateWorkout = (workout: Partial<Workout>) =>
  pipe(
    Effect.tryPromise(() =>
      prisma.workout.update({
        data: {
          name: workout.name,
          description: workout.description,
          sets: workout.sets,
          reps: workout.reps,
          duration: workout.duration,
          workoutdate: workout.date,
          goalId: workout.goalId as string,
        },
        where: {
          id: workout.id,
        },
      })
    ),
    Effect.flatMap(data => Effect.succeed({ message: 'success fully updated workout', data }))
  );

export const deleteWorkout = (id: string | null) =>
  pipe(
    Effect.tryPromise({
      try: () =>
        prisma.workout.delete({
          where: {
            id: id || '',
          },
        }),
      catch: error => new DeleteWorkoutsPrismaError(JSON.stringify(error)),
    }),
    Effect.flatMap(() => Effect.succeed({ message: 'success fully deleted' }))
  );

export const getAllGoals = (user: string | undefined) =>
  Effect.tryPromise(() =>
    prisma.workoutGoal.findMany({
      where: {
        userId: user,
      },
    })
  );

export const createWorkoutGoal = (goal: WorkoutGoal) =>
  pipe(
    Effect.tryPromise(() =>
      prisma.workoutGoal.create({
        data: {
          name: goal.name,
          userId: goal.userId,
          description: goal.description,
          weightGoal: goal.weightGoal,
          bodyFatGoal: goal.bodyFatGoal,
          beginDate: goal.beginDate?.toISOString(),
          endDate: goal.endDate?.toISOString(),
        },
      })
    ),
    Effect.flatMap(data => Effect.succeed({ message: 'success fully created workout goal', data }))
  );

export const updateWorkoutGoal = (goal: Partial<WorkoutGoal>) =>
  pipe(
    Effect.tryPromise(() =>
      prisma.workoutGoal.update({
        data: {
          name: goal.name,
          description: goal.description,
          weightGoal: goal.weightGoal,
          bodyFatGoal: goal.bodyFatGoal,
          beginDate: goal.beginDate?.toISOString(),
          endDate: goal.endDate?.toISOString(),
        },
        where: {
          id: goal.id,
        },
      })
    ),
    Effect.flatMap(data => Effect.succeed({ message: 'success fully updated workout goal', data }))
  );

export const deleteWorkoutGoal = (id: string | null) =>
  pipe(
    Effect.tryPromise(() =>
      prisma.workoutGoal.delete({
        where: {
          id: id || '',
        },
      })
    ),
    Effect.flatMap(() => Effect.succeed({ message: 'success fully deleted workout goal' }))
  );

export const getAllWorkoutTypes = (userId: string | undefined) =>
  Effect.tryPromise(() =>
    prisma.workoutTypes.findMany({
      where: {
        userId: userId,
      },
    })
  );

export const createWorkoutType = (workoutType: WorkoutTypes) =>
  pipe(
    Effect.tryPromise(() =>
      prisma.workoutTypes.create({
        data: {
          userId: workoutType.userId,
          name: workoutType.name,
        },
      })
    ),

    Effect.flatMap(data =>
      Effect.succeed({ message: 'success fully created new workout type', data })
    )
  );
