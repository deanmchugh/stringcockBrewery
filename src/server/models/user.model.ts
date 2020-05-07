import {model, Schema, Document} from 'mongoose'

const UserSchema: Schema = new Schema({
    firstName: {
        type: String, 
        required: [true, 'First name is required'],
        min: [1, 'First name is required'],
        max: [20, 'First name needs to be 20 characters or less']
    },
    lastName: {
        type: String, 
        required: [true, 'Last name is required'],
        min: [1, 'Last name is required'],
        max: [20, 'Last name needs to be 20 characters or less']
    },
    email: {
        type: String, 
        required: [true, 'Email is required'],
        unique: [true, 'Email already existes'],
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            'Please fill a valid email address'
        ]
    },
    password: {
        type: String, 
        required: [true, 'Password is required'],
        min: [6, 'Password must be 6 charcters or more'],
        max: [20, 'Password can not exceed 20 characters']
    },
    updated: { 
        type: Date, 
        default: Date.now() 
    }
})

export interface IUser extends Document {
    firstName: String
    lastName: String
    email: String
    password: String
    updated: Date
}

export default model<IUser>('User', UserSchema)