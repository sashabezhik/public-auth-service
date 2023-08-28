export class SignUpInput {
    public readonly email: string
    public readonly password: string

    constructor(options: SignUpInput) {
        this.email = options.email
        this.password = options.password
    }
}