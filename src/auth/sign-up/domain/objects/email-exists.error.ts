import { AuthError } from '../../../../__core__/errors/auth-error'

export class EmailAlreadyExistsError extends AuthError {
    constructor() {
        super({
            message: 'User with such email already exists',
            code: 'FITAS_EMAIL_ALREADY_EXISTS_ERROR'
        })
    }
}