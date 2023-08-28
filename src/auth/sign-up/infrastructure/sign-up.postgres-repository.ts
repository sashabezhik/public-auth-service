import * as bcrypt from 'bcryptjs'
import { Snowflake } from 'nodejs-snowflake'
import { addMinutes } from 'date-fns'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { SignUpRepository } from '../domain/sign-up.repository'
import { PrismaService } from '../../../__core__/prisma/prisma.service'
import { SignUpEntity } from '../domain/objects/sign-up.entity'
import { SignUpOutput } from '../domain/objects/sign-up.output'

@Injectable()
export class SignUpPostgresRepository implements SignUpRepository {
    private readonly AUTH_EPOCH = new Date(2023, 8, 24).getTime()
    private readonly snowflake: Snowflake = new Snowflake({ custom_epoch: this.AUTH_EPOCH })

    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

    public async generateUniqueId(): Promise<string> {
        return this.snowflake.getUniqueID().toString()
    }

    public async hashPassword(plain: string): Promise<string> {
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(plain, salt)
    }

    public async addCredentials(entity: SignUpEntity): Promise<void> {
        const { userId: user_id, email, password } = entity

        await this.prisma.authCredential.create({
            data: {
                user_id,
                email,
                password
            }
        })
    }

    public async generateAuthToken(userId: string): Promise<SignUpOutput> {
        return new SignUpOutput({
            userId,
            token: this.jwtService.sign({ userId, isAuthToken: true }, { expiresIn: '30m' }),
            refreshToken: this.jwtService.sign({ userId, isRefreshToken: true }),
            expireTime: addMinutes(new Date(), 30)
        })
    }

    public async doesEmailAlreadyExist(email: string): Promise<boolean> {
        const result = await this.prisma.authCredential.findUnique({
            where: {
                email
            }
        })

        return result ? true : false
    }
}