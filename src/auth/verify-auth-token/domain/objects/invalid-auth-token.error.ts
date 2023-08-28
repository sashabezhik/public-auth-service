import { AuthError } from '../../../../__core__/errors/auth-error'

export class InvalidAuthTokenError extends AuthError {
    constructor() {
        super({
            message: 'Invalid auth token',
            code: 'FITAS_INVALID_AUTH_TOKEN'
        })
    }
}