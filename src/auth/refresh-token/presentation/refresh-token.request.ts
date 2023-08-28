import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class RefreshTokenRequest {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    public readonly refreshToken!: string
}