import * as bcrypt from 'bcryptjs'
import { addMinutes } from 'date-fns'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { SignInRepository } from '../domain/sign-in.repository'
import { PrismaService } from '../../../__core__/prisma/prisma.service'
import { SignInEntity } from '../domain/objects/sign-in.entity'
import { SignInOutput } from '../domain/objects/sign-in.output'

@Injectable()
export class SignInPostgresRepository implements SignInRepository {
    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

    public async getSignInCredentialsByEmail(email: string): Promise<SignInEntity | null> {
        const credentials = await this.prisma.authCredential.findUnique({ where: { email } })
        if (!credentials) return null

        const compare = (plain: string, hashed: string) => bcrypt.compare(plain, hashed)
        return new SignInEntity({
            ...credentials,
            userId: credentials.user_id,
            compare
        })
    }

    public async generateAuthToken(userId: string): Promise<SignInOutput> {
        return new SignInOutput({
            userId,
            token: this.jwtService.sign({ userId, isAuthToken: true } , { expiresIn: '30m' }),
            refreshToken: this.jwtService.sign({ userId, isRefreshToken: true }),
            expireTime: addMinutes(new Date(), 30)
        })
    }
}