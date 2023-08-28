import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger'
import { RefreshTokenInteractor } from '../domain/refresh-token.interactor'
import { RefreshTokenRequest } from './refresh-token.request'
import { RefreshTokenResponse } from './refresh-token.response'

@ApiTags('auth')
@Controller()
export class RefreshTokenController {
    constructor(private readonly interactor: RefreshTokenInteractor) {}

    @Post('refresh-token')
    @ApiOperation({ description: 'refresh auth-token' })
    @ApiCreatedResponse({ type: RefreshTokenResponse })
    public async execute(@Body() { refreshToken }: RefreshTokenRequest): Promise<RefreshTokenResponse> {    
        const output = await this.interactor.execute(refreshToken)
        return new RefreshTokenResponse(output)
    }
}