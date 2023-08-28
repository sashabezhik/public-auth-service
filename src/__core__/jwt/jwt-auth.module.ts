import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AppConfigModule } from '../config/app-config.module'
import { JwtConfigService } from './jwt-config.service'

@Module({
    imports: [
        JwtModule.registerAsync({
            useClass: JwtConfigService,
            imports: [AppConfigModule]
        })
    ],
    exports: [JwtModule]
})
export class JwtAuthModule {}