interface IErrorOptions {
    message: string
    code: string
}

export class AuthError extends Error {
    private readonly _message: string
    private readonly _code: string

    constructor(options: IErrorOptions) {
        super(options.message)

        this._message = options.message
        this._code = options.code
    }

    public getMessage(): string {
        return this._message
    }

    public getCode(): string {
        return this._code
    }
}