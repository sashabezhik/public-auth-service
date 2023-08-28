import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger'
import { SignInInteractor } from '../domain/sign-in.interactor'
import { SignInInput } from '../domain/objects/sign-in.input'
import { SignInRequest } from './sign-in.request'
import { SignInResponse } from './sign-in.response'

@ApiTags('auth')
@Controller()
export class SignInController {
    constructor(private readonly interactor: SignInInteractor) {}

    @Post('sign-in')
    @ApiOperation({ description: 'sign-in with email & password' })
    @ApiCreatedResponse({ type: SignInResponse })
    public async execute(@Body() request: SignInRequest): Promise<SignInResponse> {
        const input = new SignInInput(request)
        const output = await this.interactor.execute(input)

        return new SignInResponse(output)
    }
}
