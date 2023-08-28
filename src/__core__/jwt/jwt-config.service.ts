import { Injectable } from '@nestjs/common'
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt'
import { EnvConfigService } from '../config/env.validation'

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
    constructor(private readonly configService: EnvConfigService) {}

    public createJwtOptions(): JwtModuleOptions {
        return {
            secret: this.configService.get('JWT_SECRET')
        }
    }
}