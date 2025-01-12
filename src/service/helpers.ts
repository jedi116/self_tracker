import {auth} from "@/auth";

export const defaultGetRouteHandlerWithErrors = async (data: Promise<any>, errorMessage?: string | undefined) => {
    try {
        const session = await auth()
        if (!session) {
            return new Response(JSON.stringify({ error: 'not authenticate' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            })
        }
        return new Response(JSON.stringify(await data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: errorMessage || error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}