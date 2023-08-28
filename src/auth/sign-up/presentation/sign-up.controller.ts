import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger'
import { SignUpInteractor } from '../domain/sign-up.interactor'
import { SignUpInput } from '../domain/objects/sign-up.input'
import { SignUpRequest } from './sign-up.request'
import { SignUpResponse } from './sign-up.response'

@ApiTags('auth')
@Controller()
export class SignUpController {
    constructor(private readonly interactor: SignUpInteractor) {}

    @Post('sign-up')
    @ApiOperation({ description: 'sign-up with email & password' })
    @ApiCreatedResponse({ type: SignUpResponse })
    public async execute(@Body() request: SignUpRequest): Promise<SignUpResponse> {
        const input = new SignUpInput(request)
        const output = await this.interactor.execute(input)

        return new SignUpResponse(output)
    }
}