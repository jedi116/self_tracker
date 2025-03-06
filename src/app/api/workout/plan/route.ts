import {createWorkoutPlan, deleteWorkoutPlan, getAllPlans, updateWorkoutPlan} from "@/service/workout";
import {processGenericRequest, processPostRequest} from "@/service/helpers";


export async function GET(_: Request): Promise<Response> {
    return processGenericRequest((session) => getAllPlans(session.user?.id as string))
}

export async function POST(request: Request): Promise<Response> {
    return processPostRequest(request, async (payload, session) => {
        await createWorkoutPlan({
            userId: session.user?.id,
            goalId: payload.goalId,
            name: payload.name,
            active: true
        } as any)
        return { message: 'success fully created'}
    })
}

export async function PUT(request: Request): Promise<Response> {
    return processPostRequest(request, async (payload, _) => {
        await updateWorkoutPlan({
            id: payload.id,
            goalId: payload.goalId,
            name: payload.name,
            active: payload.active
        })
        return { message: 'success fully updated'}
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