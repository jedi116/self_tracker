import {prisma} from "@/prisma";
import Workout from "@/types/Workout";

export const getAllWorkouts = async (user: string | null | undefined): Promise<Workout[]> => {
    const data = await prisma.workout.findMany({
        include: {
            WorkoutPlan: {
                include: {
                    WorkoutGoal: true
                }
            }
        },
        where: {
            userid: user
        }
    })
    return  data.map((workout) => {
        return {
            id: workout.id,
            plan: workout.WorkoutPlan.name,
            name: workout.name,
            description: workout.description,
            sets: workout.sets,
            reps: workout.reps,
            duration: workout.duration,
            goal: workout.WorkoutPlan.WorkoutGoal.name,
            date: workout.workoutdate
        }
    })
}

export const getAllPlans = (user: string | null | undefined) => {
    return prisma.workoutPlan.findMany({
        where: {
            userId: user,
        }
    })
}

export const getAllGoals = (user: string | null | undefined) => {
    return prisma.workoutGoal.findMany({
        where: {
            userId: user,
        }
    })
}