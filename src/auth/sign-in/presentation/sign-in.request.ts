import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class SignInRequest {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    public readonly email!: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    public readonly password!: string
}