import {Effect, pipe} from "effect";
import {FetchError, ParseError} from "@/errors";
import WorkoutGoal from "@/types/WorkoutGoal";
import Workout from "@/types/Workout";
import {WorkoutTypes} from "@/types/WorkoutTypes";

class ErrorCreatingGoal extends Error {
    readonly _tag = 'ErrorCreatingGoal'
    constructor(message: string) {
        super(message)
    }
}

class ErrorCreatingWorkout extends Error {
    readonly _tag = 'ErrorCreatingWorkout'
    constructor(message: string) {
        super(message)
    }
}

export const deleteGoals = (id: string) => pipe(
    Effect.tryPromise({
        try: () => fetch(`api/workout/goals?id=${id}`, {method: 'DELETE'}),
        catch: (error) => new FetchError(500, String(error))
    }),
    Effect.flatMap(response => Effect.tryPromise({
        try: async () => {
            const body = await response.json()
            const {ok, status} = response
            return {
                ok,
                body,
                status
            }
        },
        catch: () => new ParseError(`http status text: ${response.statusText}`)
    })),
    Effect.flatMap(response => response.ok ?
        Effect.succeed(response):
        Effect.fail(new FetchError(response.status, JSON.stringify(response.body)))
    )
)

export const createOrEditGoals = (data: Partial<WorkoutGoal> | null, method: 'POST' | 'PUT') =>  pipe(
    Effect.try({
        try : () => JSON.stringify({
            ...data,
        }),
        catch: (error) => new ParseError(error)
    }),
    Effect.flatMap(body => Effect.tryPromise({
        try: () => fetch("/api/workout/goals", {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body,
        }),
        catch: (error) => new FetchError(500, String(error))
    })),

    Effect.flatMap(response => response.ok
        ? Effect.succeed(response)
        : Effect.fail(new ErrorCreatingGoal('Error creating goal, response is not ok'))
    ),

    Effect.flatMap(response => Effect.tryPromise({
        try: () => response.json() as Promise<{data: WorkoutGoal}>,
        catch: () => new ParseError('Error parsing goal edit response json')
    }))
)

export const createOrEditWorkouts = (data: Partial<Workout> | null, method: 'POST' | 'PUT') =>  pipe(
    Effect.try({
        try : () => JSON.stringify({
            ...data,
        }),
        catch: (error) => new ParseError(error)
    }),
    Effect.flatMap(body => Effect.tryPromise({
        try: () => fetch("/api/workout/workouts", {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body,
        }),
        catch: (error) => new FetchError(500, String(error))
    })),

    Effect.flatMap(response => response.ok
        ? Effect.succeed(response)
        : Effect.fail(new ErrorCreatingWorkout('Error creating workout, response is not ok'))
    ),

    Effect.flatMap(response => Effect.tryPromise({
        try: () => response.json() as Promise<{data: Workout}>,
        catch: () => new ParseError('Error parsing workout edit response json')
    }))
)

export const createOrEditWorkoutTypes = (data: {name?: string} | null, method: 'POST' | 'PUT') =>  pipe(
    Effect.try({
        try : () => JSON.stringify({
            ...data,
        }),
        catch: (error) => new ParseError(error)
    }),
    Effect.flatMap(body => Effect.tryPromise({
        try: () => fetch("/api/workout/types", {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body,
        }),
        catch: (error) => new FetchError(500, String(error))
    })),

    Effect.flatMap(response => response.ok
        ? Effect.succeed(response)
        : Effect.fail(new ErrorCreatingWorkout('Error creating workout types, response is not ok'))
    ),

    Effect.flatMap(response => Effect.tryPromise({
        try: () => response.json() as Promise<{data: WorkoutTypes}>,
        catch: () => new ParseError('Error parsing workout type response json')
    }))
)

export const deleteWorkout = (id: string) => pipe(
    Effect.tryPromise({
        try: () => fetch(`api/workout/workouts?id=${id}`, {method: 'DELETE'}),
        catch: (error) => new FetchError(500, String(error))
    }),
    Effect.flatMap(response => Effect.tryPromise({
        try: async () => {
            const body = await response.json()
            const {ok, status} = response
            return {
                ok,
                body,
                status
            }
        },
        catch: () => new ParseError(`http status text: ${response.statusText}`)
    })),
    Effect.flatMap(response => response.ok ?
        Effect.succeed(response):
        Effect.fail(new FetchError(response.status, JSON.stringify(response.body)))
    )
)