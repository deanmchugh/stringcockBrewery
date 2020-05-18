import {Document, Model} from 'mongoose'

export interface IUser {
    firstName: string
    lastName: string
    email: string
    password: string
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