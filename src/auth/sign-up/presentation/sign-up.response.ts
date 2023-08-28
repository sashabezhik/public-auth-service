import { ApiProperty } from '@nestjs/swagger'

export class SignUpResponse {
    @ApiProperty()
    public readonly userId: string
    
    @ApiProperty()
    public readonly token: string

    @ApiProperty()
    public readonly refreshToken: string

    @ApiProperty()
    public readonly expireTime: Date

    constructor(options: SignUpResponse) {
        this.userId = options.userId
        this.token = options.token
        this.refreshToken = options.refreshToken
        this.expireTime = options.expireTime
    }
}