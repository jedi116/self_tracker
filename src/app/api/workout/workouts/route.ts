import {processGenericRequest, processPostRequest} from "@/service/helpers";
import {createWorkout, getAllWorkouts, updateWorkout, deleteWorkout} from "@/service/workout";

export async function GET() {
    return processGenericRequest((session) => getAllWorkouts(session.user?.id as string))
}


export async function POST(request: Request) {
    return processPostRequest(request, async (payload, session) => {
        const data = await createWorkout({
            userid: session.user?.id,
            name: payload.name,
            description: payload.description,
            sets: parseInt(payload.sets),
            reps: parseInt(payload.reps),
            duration: payload.duration,
            date: new Date(payload.date),
            plan: payload.plan
        } as any)
        return { message: 'success fully created', data }
    })
}

export async function PUT(request: Request) {
    return processPostRequest(request, async (payload) => {
        const data = await updateWorkout({
            id: payload.id,
            name: payload.name,
            description: payload.description,
            sets: parseInt(payload.sets),
            reps: parseInt(payload.reps),
            duration: payload.duration,
            date: new Date(payload.date),
            plan: payload.plan
        })
        return { message: 'success fully updated', data }
    })
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id')
    return processGenericRequest(async () => {
        await deleteWorkout(id || undefined)
        return { message: 'success fully deleted'}
    })
}