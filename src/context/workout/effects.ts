import { Effect, pipe } from 'effect';
import WorkoutGoal from '@/types/WorkoutGoal';
import { WorkoutTypes } from '@/types/WorkoutTypes';
import Workout from '@/types/Workout';
import { FetchError, ParseError } from '@/errors';

export const getGoals = pipe(
  Effect.tryPromise({
    try: () => fetch('/api/workout/goals'),
    catch: error => new FetchError(500, `Network error: ${String(error)}`),
  }),

  Effect.flatMap(response =>
    response.ok
      ? Effect.succeed(response)
      : Effect.fail(
          new FetchError(response.status, `HTTP error: ${response.status} ${response.statusText}`)
        )
  ),

  Effect.flatMap(response =>
    Effect.tryPromise({
      try: () => response.json() as Promise<WorkoutGoal[]>,
      catch: error => new ParseError(error),
    })
  ),

  Effect.map(goals => {
    if (!Array.isArray(goals)) {
      throw new ParseError('Response is not an array of workout goals');
    }
    return goals;
  })
);

export const getWorkouts = pipe(
  Effect.tryPromise({
    try: () => fetch('/api/workout/workouts'),
    catch: error => new FetchError(500, `Network error: ${String(error)}`),
  }),

  Effect.flatMap(response =>
    response.ok
      ? Effect.succeed(response)
      : Effect.fail(
          new FetchError(response.status, `HTTP error: ${response.status} ${response.statusText}`)
        )
  ),

  Effect.flatMap(response =>
    Effect.tryPromise({
      try: () => response.json() as Promise<Workout[]>,
      catch: error => new ParseError(error),
    })
  ),

  Effect.map(workouts => {
    if (!Array.isArray(workouts)) {
      throw new ParseError('Response is not an array of workouts');
    }
    return workouts;
  })
);

export const getWorkoutTypes = pipe(
  Effect.tryPromise({
    try: () => fetch('/api/workout/types'),
    catch: error => new FetchError(500, `Network error: ${String(error)}`),
  }),

  Effect.flatMap(response =>
    response.ok
      ? Effect.succeed(response)
      : Effect.fail(
          new FetchError(response.status, `HTTP error: ${response.status} ${response.statusText}`)
        )
  ),

  Effect.flatMap(response =>
    Effect.tryPromise({
      try: () => response.json() as Promise<WorkoutTypes[]>,
      catch: error => new ParseError(error),
    })
  ),

  Effect.map(workoutTypes => {
    if (!Array.isArray(workoutTypes)) {
      throw new ParseError('Response is not an array of workout types');
    }
    return workoutTypes;
  })
);
