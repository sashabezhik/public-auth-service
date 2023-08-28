import { Injectable } from '@nestjs/common'
import { SignInRepository } from './sign-in.repository'
import { SignInInput } from './objects/sign-in.input'
import { SignInOutput } from './objects/sign-in.output'
import { SignInError } from './objects/sign-in.error'

@Injectable()
export class SignInInteractor {
    constructor(private readonly repository: SignInRepository) {}

    public async execute({ email, password: plain }: SignInInput): Promise<SignInOutput> {
        const credentials = await this.repository.getSignInCredentialsByEmail(email)

        if (!credentials) throw new SignInError()
        if (await credentials.isInvalidPassword(plain)) throw new SignInError()

        const userId = credentials.getUserId()
        return this.repository.generateAuthToken(userId)
    }
}