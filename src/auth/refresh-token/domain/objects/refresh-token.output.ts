export class RefreshTokenOutput {
    public readonly token: string
    public readonly refreshToken: string
    public readonly expireTime: Date

    constructor(options: RefreshTokenOutput) {
        this.token = options.token
        this.refreshToken = options.refreshToken
        this.expireTime = options.expireTime
    }
}