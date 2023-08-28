import { Module } from '@nestjs/common'
import { CoreModule } from '../../__core__/core.module'
import { SignUpController } from './presentation/sign-up.controller'
import { SignUpInteractor } from './domain/sign-up.interactor'
import { SignUpRepository } from './domain/sign-up.repository'
import { SignUpPostgresRepository } from './infrastructure/sign-up.postgres-repository'

@Module({
    imports: [CoreModule],
    controllers: [SignUpController],
    providers: [SignUpInteractor, { provide: SignUpRepository, useClass: SignUpPostgresRepository }]
})
export class SignUpModule {}