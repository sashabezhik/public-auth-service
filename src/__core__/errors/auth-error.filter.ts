import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common'
import { Response } from 'express'
import { AuthError } from './auth-error'
import { AuthErrorResponse } from './auth-error.response'

@Catch(AuthError)
export class AuthErrorFilter implements ExceptionFilter {
    public catch(error: AuthError, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()

        response.status(200).json({
            success: false,
            error: new AuthErrorResponse({
                message: error.getMessage(),
                code: error.getCode()
            })
        })
    }
}