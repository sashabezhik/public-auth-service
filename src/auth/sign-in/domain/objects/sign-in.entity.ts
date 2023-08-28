type ICompare = (plain: string, hashed: string) => Promise<boolean>

interface ISignInEntity {
    userId: string
    password: string
    compare: ICompare
}

export class SignInEntity {
    private readonly _userId: string
    private readonly _password: string
    private readonly _compare: ICompare

    constructor(options: ISignInEntity) {
        this._userId = options.userId
        this._password = options.password
        this._compare = options.compare
    }

    public async isInvalidPassword(plain: string): Promise<boolean> {
        return !(await this._compare(plain, this._password))
    }

    public getUserId(): string {
        return this._userId
    }
}