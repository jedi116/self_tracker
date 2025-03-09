import {processGenericRequest, processPostRequest} from "@/service/helpers";
import {getAllWorkoutTypes, createWorkoutType} from "@/service/workout";

export async function GET(): Promise<Response> {
    return processGenericRequest((session) => getAllWorkoutTypes(session.user?.id as string))
}

export async function POST(request: Request): Promise<Response> {
    return processPostRequest(request, async (payload, session) => {
        const data = await createWorkoutType({
            userId: session.user?.id,
            name: payload.name,
        } as any)
        return { message: 'success fully created', data }
    })
}