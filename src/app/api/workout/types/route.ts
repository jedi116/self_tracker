import {processGenericRequest, processPostRequest} from "@/service/helpers";
import {getAllWorkoutTypes, createWorkoutType} from "@/service/workout";
import {WorkoutTypes} from "@/types/WorkoutTypes";
import {Effect} from "effect";

export async function GET(): Promise<Response> {
    return Effect.runPromise(
        processGenericRequest((session) => getAllWorkoutTypes(session.user?.id as string))
    )
}

export async function POST(request: Request): Promise<Response> {
    return Effect.runPromise(
        processPostRequest(request, (payload, session) => createWorkoutType({
            userId: session.user?.id,
            name: payload.name,
        } as WorkoutTypes))
    )
}