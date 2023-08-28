export class SignUpEntity {
    public readonly userId: string
    public readonly email: string
    public readonly password: string

    constructor(options: SignUpEntity) {
        this.userId = options.userId
        this.email = options.email
        this.password = options.password
    }
}