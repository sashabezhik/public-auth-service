import { SignInEntity } from './objects/sign-in.entity'
import { SignInOutput } from './objects/sign-in.output'

export abstract class SignInRepository {
    public abstract getSignInCredentialsByEmail(email: string): Promise<SignInEntity | null>
    public abstract generateAuthToken(userId: string): Promise<SignInOutput>
}