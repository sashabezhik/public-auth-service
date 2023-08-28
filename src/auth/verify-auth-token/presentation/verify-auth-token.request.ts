import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class VerifyAuthTokenRequest {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    public readonly authToken!: string
}