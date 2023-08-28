import { Module } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
import { CoreModule } from './__core__/core.module'
import { AuthModule } from './auth/auth.module'
import { AuthErrorFilter } from './__core__/errors/auth-error.filter'

@Module({
    imports: [
        CoreModule,
        AuthModule
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AuthErrorFilter
        }
    ]
})
export class AppModule {}
