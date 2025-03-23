import {processGenericRequest, processPostRequest} from "@/service/helpers";
import {createWorkoutGoal, updateWorkoutGoal, deleteWorkoutGoal, getAllGoals} from "@/service/workout";
import WorkoutGoal from "@/types/WorkoutGoal";
import {Effect, pipe} from "effect";
import {ParseError} from "@/errors";


export async function GET(): Promise<Response> {
    return Effect.runPromise(processGenericRequest((session) => getAllGoals(session.user?.id as string)))
}

export async function POST(request: Request): Promise<Response> {
    return Effect.runPromise(
        processPostRequest(request, (payload, session) => createWorkoutGoal({
            userId: session.user?.id,
            name: payload.name,
            description:  payload.description,
            weightGoal: payload.weightGoal,
            bodyFatGoal: payload.bodyFatGoal,
            beginDate: new Date(payload.beginDate),
            endDate: new Date(payload.endDate)
        } as WorkoutGoal))
    )
}

export async function PUT(request: Request): Promise<Response> {
    return Effect.runPromise(processPostRequest(request, (payload) => updateWorkoutGoal({
        id: payload.id,
        name: payload.name,
        description:  payload.description,
        weightGoal: payload.weightGoal,
        bodyFatGoal: payload.bodyFatGoal,
        beginDate: new Date(payload.beginDate),
        endDate: new Date(payload.endDate)
    })))
}

export async function DELETE(request: Request): Promise<Response> {

    return Effect.runPromise(
        processGenericRequest(() => pipe(
                Effect.try({
                    try: ()=> {
                        const { searchParams } = new URL(request.url);
                        return  searchParams.get('id')
                    },
                    catch: (error) => {
                        console.log(error)
                        return new ParseError('failed to parse id from request')
                    }
                }),
                Effect.flatMap(id => deleteWorkoutGoal(id))
            )
        )
    )
}
