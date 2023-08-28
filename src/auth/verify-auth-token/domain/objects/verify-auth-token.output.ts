export class VerifyAuthTokenOutput {
    public readonly userId: string

    constructor(options: VerifyAuthTokenOutput) {
        this.userId = options.userId
    }
}