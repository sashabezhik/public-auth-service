import { Injectable } from '@nestjs/common'
import { VerifyAuthTokenRepository } from './verify-auth-token.repository'
import { VerifyAuthTokenOutput } from './objects/verify-auth-token.output'
import { InvalidAuthTokenError } from './objects/invalid-auth-token.error'

@Injectable()
export class VerifyAuthTokenInteractor {
    constructor(private readonly repository: VerifyAuthTokenRepository) {}

    public async execute(authToken: string): Promise<VerifyAuthTokenOutput> {
        const entity = await this.repository.verifyAuthToken(authToken)
        if (!entity) throw new InvalidAuthTokenError()

        return new VerifyAuthTokenOutput(entity)
    }
}