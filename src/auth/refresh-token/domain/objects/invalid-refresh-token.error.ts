import { AuthError } from '../../../../__core__/errors/auth-error'

export class InvalidRefreshTokenError extends AuthError {
    constructor() {
        super({
            message: 'Invalid refresh token',
            code: 'FITAS_INVALID_REFRESH_TOKEN'
        })
    }
}