export class FetchError extends Error {
    readonly _tag = 'FetchError'
    constructor(readonly statusCode: number, message: string) {
        super(message)
    }
}


export class ParseError extends Error {
    readonly _tag = 'ParseError'
    constructor(readonly cause: unknown) {
        super('Failed to parse data')
    }
}