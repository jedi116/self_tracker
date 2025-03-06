import {processGenericRequest, processPostRequest} from "@/service/helpers";
import {createWorkoutGoal, updateWorkoutGoal, deleteWorkoutGoal, getAllGoals} from "@/service/workout";

export async function GET(_: Request): Promise<Response> {
    return processGenericRequest((session) => getAllGoals(session.user?.id as string))
}

export async function POST(request: Request): Promise<Response> {
    return processPostRequest(request, async (payload, session) => {
        await createWorkoutGoal({
            userId: session.user?.id,
            name: payload.name,
            description:  payload.description,
            weightGoal: payload.weightGoal,
            bodyFatGoal: payload.bodyFatGoal,
            beginDate: new Date(payload.beginDate),
            endDate: new Date(payload.endDate)
        } as any)
        return { message: 'success fully created'}
    })
}

export async function PUT(request: Request): Promise<Response> {
    return processPostRequest(request, async (payload, _) => {
        await updateWorkoutGoal({
            id: payload.id,
            name: payload.name,
            description:  payload.description,
            weightGoal: payload.weightGoal,
            bodyFatGoal: payload.bodyFatGoal,
            beginDate: new Date(payload.beginDate),
            endDate: new Date(payload.endDate)
        })
        return { message: 'success fully updated'}
    } )
}

export async function DELETE(request: Request): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id')
    return processGenericRequest(async () => {
        await deleteWorkoutGoal(id || undefined)
        return { message: 'success fully deleted'}
    })
}