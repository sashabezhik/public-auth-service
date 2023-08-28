import { Module } from '@nestjs/common'
import { CoreModule } from '../../__core__/core.module'
import { VerifyAuthTokenController } from './presentation/verify-auth-token.controller'
import { VerifyAuthTokenInteractor } from './domain/verify-auth-token.interactor'
import { VerifyAuthTokenRepository } from './domain/verify-auth-token.repository'
import { VerifyAuthTokenPostgresRepository } from './infrastructure/verify-auth-token.postgres-repository'

@Module({
    imports: [CoreModule],
    controllers: [VerifyAuthTokenController],
    providers: [
        VerifyAuthTokenInteractor,
        { provide: VerifyAuthTokenRepository, useClass: VerifyAuthTokenPostgresRepository }
    ]
})
export class VerifyAuthTokenModule {}