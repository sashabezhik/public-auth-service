export class SignUpOutput {
    public readonly userId: string
    public readonly token: string
    public readonly refreshToken: string
    public readonly expireTime: Date

    constructor(options: SignUpOutput) {
        this.userId = options.userId
        this.token = options.token
        this.refreshToken = options.refreshToken
        this.expireTime = options.expireTime
    }
}