import {IUserDocument, IUserModel} from './user.types'

export async function findOrCreate(
    this: IUserModel,
    userId: string
): Promise<IUserDocument> {
    const record = await this.findOne({userId})
    if (record) {
        return record
    } else {
        return this.create({userId})
    }
}