import {defaultGetRouteHandlerWithErrors} from "@/service/helpers";
import {getAllWorkouts} from "@/service/workout";

export async function GET(request: Request): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const user = searchParams.get('user')
    return defaultGetRouteHandlerWithErrors(getAllWorkouts(user))
}