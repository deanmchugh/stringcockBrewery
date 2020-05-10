import {Document, Model} from 'mongoose'

export interface IUser {
    firstName: String
    lastName: String
    email: String
    password: String
    created?: Date
    lastUpdated?: Date
}

export interface IUserDocument extends IUser, Document {
    setPassword: (this: IUserDocument) => Promise<void>
}

export interface IUserModel extends Model<IUserDocument> {
    findOrCreate: (
        this: IUserModel, {
            firstName,
            lastName,
            email,
            password
        }: {
            firstName: string
            lastName: string
            email: string
            password: string
        }
    ) => Promise<IUserDocument>
}