import {IUserDocument} from './user.types'
import {compareSync} from 'bcryptjs'


async function setLastUpdated(this: IUserDocument): 
Promise<void> {
    const now = new Date()
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now
        await this.save()
    }
}

export async function setPassword(this: IUserDocument, newPW: string):
Promise<void> {
    this.password = newPW
    setLastUpdated
    await this.save()
}

export async function comparePassword(this: IUserDocument, plainPW: string, callback: any):
Promise<void> {
    return callback(null, compareSync(plainPW, this.password))
}