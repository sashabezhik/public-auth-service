import { RefreshTokenEntity } from './objects/refresh-token.entity'
import { RefreshTokenOutput } from './objects/refresh-token.output'

export abstract class RefreshTokenRepository {
    public abstract verifyRefreshToken(refreshToken: string): Promise<RefreshTokenEntity | null>
    public abstract generateAuthToken(entity: RefreshTokenEntity): Promise<RefreshTokenOutput>
}