import { AuthError } from '../../../../__core__/errors/auth-error'

export class SignInError extends AuthError {
    constructor() {
        super({
            message: 'Sign in error',
            code: 'FITAS_SIGN_IN_ERROR'
        })
    }
}