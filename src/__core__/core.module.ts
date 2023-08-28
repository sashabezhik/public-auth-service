import { Module } from '@nestjs/common'
import { AppConfigModule } from './config/app-config.module'
import { PrismaModule } from './prisma/prisma.module'
import { JwtAuthModule } from './jwt/jwt-auth.module'

@Module({
    imports: [AppConfigModule, PrismaModule, JwtAuthModule],
    exports: [AppConfigModule, PrismaModule, JwtAuthModule]
})
export class CoreModule {}