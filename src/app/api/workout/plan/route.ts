import {createWorkoutPlan, deleteWorkoutPlan, getAllPlans, updateWorkoutPlan} from "@/service/workout";
import {processGenericRequest, processPostRequest} from "@/service/helpers";
import WorkoutPlan from "@/types/WorkoutPlan";


export async function GET(): Promise<Response> {
    return processGenericRequest((session) => getAllPlans(session.user?.id as string))
}

export async function POST(request: Request): Promise<Response> {
    return processPostRequest(request, async (payload, session) => {
        const data = await createWorkoutPlan({
            userId: session.user?.id,
            goalId: payload.goalId,
            name: payload.name,
            active: true
        } as WorkoutPlan)
        return { message: 'success fully created', data }
    })
}

export async function PUT(request: Request): Promise<Response> {
    return processPostRequest(request, async (payload) => {
        const data = await updateWorkoutPlan({
            id: payload.id,
            goalId: payload.goalId,
            name: payload.name,
            active: payload.active
        })
        return { message: 'success fully updated', data }
    } )
}

export async function DELETE(request: Request): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id')
    return processGenericRequest(async () => {
        await deleteWorkoutPlan(id || undefined)
        return { message: 'success fully deleted'}
    })
}