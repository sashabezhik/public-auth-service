import { Module } from '@nestjs/common'
import { SignUpModule } from './sign-up/sign-up.module'
import { SignInModule } from './sign-in/sign-in.module'
import { VerifyAuthTokenModule } from './verify-auth-token/verify-auth-token.module'
import { RefreshTokenModule } from './refresh-token/refresh-token.module'

@Module({
    imports: [
        SignUpModule,
        SignInModule,
        VerifyAuthTokenModule,
        RefreshTokenModule
    ]
})
export class AuthModule {}