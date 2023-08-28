import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { addMinutes } from 'date-fns'
import { RefreshTokenRepository } from '../domain/refresh-token.repository'
import { PrismaService } from '../../../__core__/prisma/prisma.service'
import { RefreshTokenEntity } from '../domain/objects/refresh-token.entity'
import { RefreshTokenOutput } from '../domain/objects/refresh-token.output'

interface IRefreshToken {
    userId: string
    isRefreshToken: boolean
}

@Injectable()
export class RefreshTokenPostgresRepository implements RefreshTokenRepository {
    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

    public async verifyRefreshToken(refreshToken: string): Promise<RefreshTokenEntity | null> {
        const payload = await this.jwtService
            .verifyAsync<IRefreshToken>(refreshToken)
            .catch((): undefined => undefined)
        if (!payload || !payload.isRefreshToken) return null

        const credentials = await this.prisma.authCredential.findUnique({
            select: { user_id: true },
            where: {
                user_id: payload.userId
            }
        })
        
        return credentials ? new RefreshTokenEntity({ userId: credentials.user_id }) : null
    }

    public async generateAuthToken({ userId }: RefreshTokenEntity): Promise<RefreshTokenOutput> {
        return new RefreshTokenOutput({
            token: this.jwtService.sign({ userId, isAuthToken: true }, { expiresIn: '30m' }),
            refreshToken: this.jwtService.sign({ userId, isRefreshToken: true }),
            expireTime: addMinutes(new Date(), 30)
        })
    }
}