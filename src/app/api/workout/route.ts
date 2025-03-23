import {processGenericRequest} from "@/service/helpers";
import {getAllWorkouts} from "@/service/workout";
import {Effect} from "effect";

export async function GET(): Promise<Response> {
    return await Effect.runPromise(processGenericRequest((session) => getAllWorkouts(session.user?.id)))
}