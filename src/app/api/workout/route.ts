import {processGenericRequest} from "@/service/helpers";
import {getAllWorkouts} from "@/service/workout";

export async function GET(_: Request): Promise<Response> {
    return processGenericRequest((session) => getAllWorkouts(session.user?.id))
}