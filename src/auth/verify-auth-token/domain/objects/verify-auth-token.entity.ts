export class VerifyAuthTokenEntity {
    public readonly userId: string

    constructor(options: VerifyAuthTokenEntity) {
        this.userId = options.userId
    }
}