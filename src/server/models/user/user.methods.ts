import {IUserDocument} from './user.types'

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