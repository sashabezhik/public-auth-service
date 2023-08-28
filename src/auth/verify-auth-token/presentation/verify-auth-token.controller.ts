import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger'
import { VerifyAuthTokenInteractor } from '../domain/verify-auth-token.interactor'
import { VerifyAuthTokenRequest } from './verify-auth-token.request'
import { VerifyAuthTokenResponse } from './verify-auth-token.response'

@ApiTags('auth')
@Controller()
export class VerifyAuthTokenController {
    constructor(private readonly interactor: VerifyAuthTokenInteractor) {}

    @Post('verify-auth-token')
    @ApiOperation({ description: 'verify auth-token' })
    @ApiCreatedResponse({ type: VerifyAuthTokenResponse })
    public async execute(@Body() { authToken }: VerifyAuthTokenRequest): Promise<VerifyAuthTokenResponse> {
        const output = await this.interactor.execute(authToken)
        return new VerifyAuthTokenResponse(output)
    }
}   