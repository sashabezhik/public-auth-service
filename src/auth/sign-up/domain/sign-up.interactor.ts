import { Injectable } from '@nestjs/common'
import { SignUpRepository } from './sign-up.repository'
import { SignUpEntity } from './objects/sign-up.entity'
import { SignUpInput } from './objects/sign-up.input'
import { SignUpOutput } from './objects/sign-up.output'
import { EmailAlreadyExistsError } from './objects/email-exists.error'

@Injectable()
export class SignUpInteractor {
    constructor(private readonly repository: SignUpRepository) {}

    public async execute({ email, password: plain }: SignUpInput): Promise<SignUpOutput> {
        if (await this.repository.doesEmailAlreadyExist(email)) throw new EmailAlreadyExistsError()

        const userId = await this.repository.generateUniqueId()
        const password = await this.repository.hashPassword(plain)

        const credentials = new SignUpEntity({ userId, email, password })
        await this.repository.addCredentials(credentials)

        return this.repository.generateAuthToken(userId)
    }
}