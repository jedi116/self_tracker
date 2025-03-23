import {auth} from "@/auth";
import {Session} from "next-auth";
import { Effect, pipe } from "effect"
import {ParseError} from "@/errors";

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




export const processPostRequest = <T> (
    request: Request,
    postAction: (payload: any, session: Session) => Effect.Effect<T, Error>,
) => pipe(

    Effect.tryPromise({
        try: () => auth(),
        catch: () => new FailedToAuthenticate()
    }),

    Effect.flatMap(session =>
      session
          ? pipe(
              Effect.tryPromise({
                  try: () => request.json(),
                  catch: (error) => new ParseError(JSON.stringify(error))
              }),
              Effect.flatMap(result => postAction(result, session)),
              Effect.map(data => new Response(JSON.stringify(data), {
                  status: 200,
                  headers: { 'Content-Type': 'application/json' },
              }))
          )
          : Effect.succeed(new Response(JSON.stringify({ error: 'not authenticate' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
      }))
    ),
    Effect.catchAll(error => Effect.succeed(
        new Response(JSON.stringify({ error }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    ))
)
