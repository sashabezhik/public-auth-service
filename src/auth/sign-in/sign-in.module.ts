import { Module } from '@nestjs/common'
import { CoreModule } from '../../__core__/core.module'
import { SignInController } from './presentation/sign-in.controller'
import { SignInInteractor } from './domain/sign-in.interactor'
import { SignInRepository } from './domain/sign-in.repository'
import { SignInPostgresRepository } from './infrastructure/sign-in.postgres-repository'

@Module({
    imports: [CoreModule],
    controllers: [SignInController],
    providers: [
        SignInInteractor,
        { provide: SignInRepository, useClass: SignInPostgresRepository }
    ]
})
export class SignInModule {}