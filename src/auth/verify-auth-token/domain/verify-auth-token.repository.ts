import { VerifyAuthTokenEntity } from './objects/verify-auth-token.entity'

export abstract class VerifyAuthTokenRepository {
    public abstract verifyAuthToken(authToken: string): Promise<VerifyAuthTokenEntity | null>
}