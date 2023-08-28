export class RefreshTokenEntity {
    public readonly userId: string

    constructor(options: RefreshTokenEntity) {
        this.userId = options.userId
    }
}