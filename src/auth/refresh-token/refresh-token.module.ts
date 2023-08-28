import { Module } from '@nestjs/common'
import { CoreModule } from '../../__core__/core.module'
import { RefreshTokenController } from './presentation/refresh-token.controller'
import { RefreshTokenInteractor } from './domain/refresh-token.interactor'
import { RefreshTokenRepository } from './domain/refresh-token.repository'
import { RefreshTokenPostgresRepository } from './infrastructure/refresh-token.postgres-repository'

@Module({
    imports: [CoreModule],
    controllers: [RefreshTokenController],
    providers: [
        RefreshTokenInteractor,
        { provide: RefreshTokenRepository, useClass: RefreshTokenPostgresRepository }
    ]
})
export class RefreshTokenModule {}