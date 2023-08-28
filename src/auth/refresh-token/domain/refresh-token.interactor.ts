import { Injectable } from '@nestjs/common'
import { RefreshTokenRepository } from './refresh-token.repository'
import { RefreshTokenOutput } from './objects/refresh-token.output'
import { InvalidRefreshTokenError } from './objects/invalid-refresh-token.error'

@Injectable()
export class RefreshTokenInteractor {
    constructor(private readonly repository: RefreshTokenRepository) {}
    
    public async execute(refreshToken: string): Promise<RefreshTokenOutput> {
        const entity = await this.repository.verifyRefreshToken(refreshToken)
        if (!entity) throw new InvalidRefreshTokenError()

        return this.repository.generateAuthToken(entity)
    }
}