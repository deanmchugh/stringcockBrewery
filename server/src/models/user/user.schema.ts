import {Schema} from 'mongoose'
import {findOrCreate} from './user.statics'
import {setPassword, comparePassword} from './user.methods'
import {IUserDocument} from './user.types'
import {hashSync} from 'bcryptjs'

const UserSchema = new Schema({
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
    created: {
        type: Date,
        default: Date.now()
    },
    lastUpdated: { 
        type: Date, 
        default: Date.now() 
    }
})

UserSchema.pre<IUserDocument>('save', function(next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = hashSync(this.password, 10)
    next()
})

UserSchema.statics.findOrCreate = findOrCreate
UserSchema.methods.setPassword = setPassword
UserSchema.methods.comparePassword = comparePassword

export default UserSchema