import {auth} from "@/auth";
import {Session} from "next-auth";

export const processGenericRequest = async <T> (
    data: (session: Session) => Promise<T>,
    errorMessage?: string | undefined
) => {
    try {
        const session = await auth()
        if (!session) {
            return new Response(JSON.stringify({ error: 'not authenticate' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            })
        }
        return new Response(JSON.stringify(await data(session)), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: errorMessage || error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

class FailedToAuthenticate extends Error {
    constructor() {
        super('Failed to authenticate')
    }
}

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
    } catch (error: unknown) {
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
