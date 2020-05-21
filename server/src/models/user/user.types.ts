import {Document, Model} from 'mongoose'

export interface IUser {
    email: string
    password: string
    created?: Date
    lastUpdated?: Date
}

export interface IUserDocument extends IUser, Document {
    setPassword: (this: IUserDocument) => Promise<void>
}

export interface IUserModel extends Model<IUserDocument> {
    findOneOrCreate: (
        this: IUserModel, {
            email,
            password
        }: {
            email: string
            password: string
        }
    ) => Promise<IUserDocument>
}