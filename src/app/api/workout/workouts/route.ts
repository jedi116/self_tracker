import { processGenericRequest, processPostRequest } from '@/service/helpers';
import { createWorkout, getAllWorkouts, updateWorkout, deleteWorkout } from '@/service/workout';
import Workout from '@/types/Workout';
import { Effect, pipe } from 'effect';
import { ParseError } from '@/errors';

export async function GET() {
  return Effect.runPromise(
    processGenericRequest(session => getAllWorkouts(session.user?.id as string))
  );
}

export async function POST(request: Request) {
  return Effect.runPromise(
    processPostRequest(request, (payload, session) =>
      createWorkout({
        userid: session.user?.id,
        name: payload.name,
        description: payload.description,
        sets: parseInt(payload.sets),
        reps: parseInt(payload.reps),
        duration: payload.duration,
        date: new Date(payload.date),
        goalId: payload.goalId,
      } as Workout)
    )
  );
}

export async function PUT(request: Request) {
  return Effect.runPromise(
    processPostRequest(request, payload =>
      updateWorkout({
        id: payload.id,
        name: payload.name,
        description: payload.description,
        sets: parseInt(payload.sets),
        reps: parseInt(payload.reps),
        duration: payload.duration,
        date: new Date(payload.date),
        goalId: payload.goalId,
      })
    )
  );
}

export async function DELETE(request: Request) {
  return Effect.runPromise(
    processGenericRequest(() =>
      pipe(
        Effect.try({
          try: () => {
            const { searchParams } = new URL(request.url);
            return searchParams.get('id');
          },
          catch: error => new ParseError(JSON.stringify(error)),
        }),
        Effect.flatMap(id => deleteWorkout(id))
      )
    )
  );
}
