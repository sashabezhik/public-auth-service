import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { validate, EnvConfigService } from './env.validation'

@Module({
    imports: [ConfigModule.forRoot({ validate })],
    providers: [{ provide: EnvConfigService, useClass: ConfigService }],
    exports: [ConfigModule, EnvConfigService]
})
export class AppConfigModule {}