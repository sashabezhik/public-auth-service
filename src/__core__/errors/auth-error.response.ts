import { ApiProperty } from '@nestjs/swagger'

export class AuthErrorResponse {

    @ApiProperty()
    public readonly message: string

    @ApiProperty()
    public readonly code: string

    constructor(options: AuthErrorResponse) {
        this.message = options.message
        this.code = options.code
    }
}