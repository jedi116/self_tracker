import {auth} from "@/auth";
import {Session} from "next-auth";
import { Effect, pipe } from "effect"

class FailedToAuthenticate extends Error {
    readonly _tag = 'FailedToAuthenticate'
    constructor() {
        super('Failed to authenticate')
    }
}

export const processGenericRequest = <T>(
    effectFn: (session: Session) => Effect.Effect<T, Error>,
    errorMessage?: string
) =>
    pipe(
        Effect.tryPromise({
            try: () => auth(),
            catch: () => new FailedToAuthenticate(),
        }),
        Effect.flatMap((session) =>
            session
                ? pipe(
                    effectFn(session),
                    Effect.map((data) =>
                        new Response(JSON.stringify(data), {
                            status: 200,
                            headers: { "Content-Type": "application/json" },
                        })
                    )
                )
                : Effect.succeed(
                    new Response(JSON.stringify({ error: "Not authenticated" }), {
                        status: 401,
                        headers: { "Content-Type": "application/json" },
                    })
                )
        ),
        Effect.catchAll((error) =>
            Effect.succeed(
                new Response(
                    JSON.stringify({ error: errorMessage || error }),
                    {
                        status: 500,
                        headers: { "Content-Type": "application/json" },
                    }
                )
            )
        )
    );




const authorizeAndGetJsonPayload = async (request: Request) => {
    const payload = await request.json()
    const session = await auth()
    if (!session) {
        throw new FailedToAuthenticate()
    }
    return {payload, session}
}

export const processPostRequest = async <T> (
    request: Request,
    postAction: (payload: any, session: Session) => Promise<T>
) => {
    try {
        const {payload, session} = await authorizeAndGetJsonPayload(request)
        const result = await postAction(payload, session)

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        console.log(error.message)
        if ( error instanceof FailedToAuthenticate) {
            return new Response(JSON.stringify({ error: 'not authenticate' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            })
        }
        return new Response(JSON.stringify({ error: error || error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
