import { ConfigService } from '@nestjs/config'
import { IsPositive, IsString, IsNotEmpty, validateSync } from 'class-validator'
import { plainToInstance } from 'class-transformer'

class EnvironmentVariables {
    @IsPositive()
    public readonly PORT!: number

    @IsString()
    @IsNotEmpty()
    public readonly DATABASE_URL!: string

    @IsString()
    @IsNotEmpty()
    public readonly JWT_SECRET!: string
}

export const validate = (config: Record<string, unknown>): EnvironmentVariables => {
    const validatedConfig = plainToInstance(EnvironmentVariables, config, { enableImplicitConversion: true })

    const errors = validateSync(validatedConfig, { skipMissingProperties: false })
    if (errors.length) throw new Error(errors.toString())
    
    return validatedConfig
}

export class EnvConfigService extends ConfigService<EnvironmentVariables, true> {}