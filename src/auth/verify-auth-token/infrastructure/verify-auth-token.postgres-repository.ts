import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { VerifyAuthTokenRepository } from '../domain/verify-auth-token.repository'
import { PrismaService } from '../../../__core__/prisma/prisma.service'
import { VerifyAuthTokenEntity } from '../domain/objects/verify-auth-token.entity'

interface IAuthToken {
    userId: string
    isAuthToken: boolean
}

@Injectable()
export class VerifyAuthTokenPostgresRepository implements VerifyAuthTokenRepository {
    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

    public async verifyAuthToken(authToken: string): Promise<VerifyAuthTokenEntity | null> {
        const payload = await this.jwtService
            .verifyAsync<IAuthToken>(authToken)
            .catch((): undefined => undefined)
        if (!payload || !payload.isAuthToken) return null

        const credentials = await this.prisma.authCredential.findUnique({
            select: { user_id: true },
            where: { user_id: payload.userId }
        })

        return credentials ? new VerifyAuthTokenEntity({ userId: credentials.user_id }) : null
    }
}