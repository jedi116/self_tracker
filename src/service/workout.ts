import {prisma} from "@/prisma";
import Workout from "@/types/Workout";
import WorkoutGoal from "@/types/WorkoutGoal";
import {WorkoutTypes} from "@/types/WorkoutTypes";
import {Effect, pipe} from "effect";

export class GetAllWorkoutsPrismaError extends Error {
    readonly _tag = 'GetAllWorkoutsPrismaError'
    constructor(message: string) {
        super(message)
    }
}

export const getAllWorkouts = (user: string | null | undefined) => pipe(
    Effect.tryPromise({
        try:  () => prisma.workout.findMany({
            include: {
                WorkoutGoal: true
            },
            where: {
                userid: user
            },
            orderBy: {
                workoutdate: "desc"
            }
        }) ,
        catch : (error) => new GetAllWorkoutsPrismaError('Failed to get all workouts: \n' + JSON.stringify(error))
    }),
    Effect.flatMap(data => Effect.succeed(data.map((workout) => {
        return {
            id: workout.id,
            name: workout.name,
            description: workout.description,
            sets: workout.sets,
            reps: workout.reps,
            duration: workout.duration,
            goal: workout.WorkoutGoal.name,
            date: workout.workoutdate,
            userid: workout.userid
        }
    })))
)


export const createWorkout = (workout: Workout) => {
    return prisma.workout.create({
        data: {
            name: workout.name,
            description: workout.description,
            sets: workout.sets,
            reps: workout.reps,
            duration: workout.duration,
            workoutdate: workout.date,
            goalId: workout.goalId as string,
            userid: workout.userid as string,
        }
    })
}

export const updateWorkout = (workout: Partial<Workout>) => {
    return prisma.workout.update({
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
            id: workout.id
        }
    })
}

export const deleteWorkout = (id: string | undefined) => {
    return prisma.workout.delete({
        where: {
            id: id
        }
    })
}

export const getAllGoals = (user: string | undefined) => {
    return prisma.workoutGoal.findMany({
        where: {
            userId: user,
        }
    })
}



export const createWorkoutGoal = (goal: WorkoutGoal)=> {
    return prisma.workoutGoal.create({
        data: {
            name: goal.name,
            userId: goal.userId,
            description: goal.description,
            weightGoal: goal.weightGoal,
            bodyFatGoal: goal.bodyFatGoal,
            beginDate: goal.beginDate?.toISOString(),
            endDate: goal.endDate?.toISOString()
        }
    })
}

export const updateWorkoutGoal = (goal: Partial<WorkoutGoal>)=> {
    return prisma.workoutGoal.update({
        data: {
            name: goal.name,
            description: goal.description,
            weightGoal: goal.weightGoal,
            bodyFatGoal: goal.bodyFatGoal,
            beginDate: goal.beginDate?.toISOString(),
            endDate: goal.endDate?.toISOString()
        },
        where: {
            id: goal.id
        }
    })
}

export const deleteWorkoutGoal = (id: string | undefined) => {
    return prisma.workoutGoal.delete({
        where: {
            id: id
        }
    })
}

export const getAllWorkoutTypes = (userId: string | undefined) => {
    return prisma.workoutTypes.findMany({
        where: {
            userId: userId
        }
    })
}

export const createWorkoutType = (workoutType: WorkoutTypes) => {
    return prisma.workoutTypes.create({
        data: {
            userId: workoutType.userId,
            name: workoutType.name,
        }
    })
}