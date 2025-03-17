import {prisma} from "@/prisma";
import Workout from "@/types/Workout";
import WorkoutPlan from "@/types/WorkoutPlan";
import WorkoutGoal from "@/types/WorkoutGoal";
import {WorkoutTypes} from "@/types/WorkoutTypes";

export const getAllWorkouts = async (user: string | null | undefined): Promise<Workout[]> => {
    const data = await prisma.workout.findMany({
        include: {
            WorkoutPlan: {
                include: {
                    WorkoutGoal: true
                }
            },
        },
        where: {
            userid: user
        },
        orderBy: {
            workoutdate: "desc"
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
            date: workout.workoutdate,
            userid: workout.userid
        }
    })
}

export const createWorkout = (workout: Workout) => {
    return prisma.workout.create({
        data: {
            name: workout.name,
            description: workout.description,
            sets: workout.sets,
            reps: workout.reps,
            duration: workout.duration,
            workoutdate: workout.date,
            planId: workout.plan as string,
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
            planId: workout.plan as string,
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

export const getAllPlans = (user: string | undefined) => {
    return prisma.workoutPlan.findMany({
        where: {
            userId: user,
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


export const createWorkoutPlan = (plan: WorkoutPlan) => {
    return prisma.workoutPlan.create({
        data: {
            userId: plan.userId,
            goalId: plan.goalId, // Linking via foreign key
            name: plan.name,
            active: plan.active,
        },
    });
};

export const updateWorkoutPlan = (plan: Omit<WorkoutPlan, 'userId'>) => {
    return prisma.workoutPlan.update({
        data: {
            goalId: plan.goalId,
            name: plan.name,
            active: plan.active,
        },
        where:{
            id: plan.id
        }
    });
};

export const deleteWorkoutPlan = (id: string | undefined) => {
    return prisma.workoutPlan.delete({
        where: {
            id: id
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