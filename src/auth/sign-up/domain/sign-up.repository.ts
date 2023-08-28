import { SignUpEntity } from './objects/sign-up.entity'
import { SignUpOutput } from './objects/sign-up.output'

export abstract class SignUpRepository {
    public abstract generateUniqueId(): Promise<string>
    public abstract hashPassword(plain: string): Promise<string>
    public abstract addCredentials(entity: SignUpEntity): Promise<void>
    public abstract generateAuthToken(userId: string): Promise<SignUpOutput>
    public abstract doesEmailAlreadyExist(email: string): Promise<boolean>
}