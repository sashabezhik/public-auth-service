export class SignInInput {
    public readonly email: string
    public readonly password: string

    constructor(options: SignInInput) {
        this.email = options.email
        this.password = options.password
    }
}