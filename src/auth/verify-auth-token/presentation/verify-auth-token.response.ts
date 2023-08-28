import { ApiProperty } from '@nestjs/swagger'

export class VerifyAuthTokenResponse {
    @ApiProperty()
    public readonly userId: string

    constructor(options: VerifyAuthTokenResponse) {
        this.userId = options.userId
    }
}