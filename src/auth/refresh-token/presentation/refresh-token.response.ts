import { ApiProperty } from '@nestjs/swagger'

export class RefreshTokenResponse {
    @ApiProperty()
    public readonly token: string

    @ApiProperty()
    public readonly refreshToken: string
   
    @ApiProperty()
    public readonly expireTime: Date

    constructor(options: RefreshTokenResponse) {
        this.token = options.token
        this.refreshToken = options.refreshToken
        this.expireTime = options.expireTime
    }
}