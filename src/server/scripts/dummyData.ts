import {UserModel} from '../models/user/user.model'
import {connect, disconnect} from '../database/database'

(async () => {
    connect()

    const users = [
        {firstName: 'John', lastName: 'Smith04', email: 'mail04@mail.com', password: '123456'},
        {firstName: 'John', lastName: 'Smith05', email: 'mail05@mail.com', password: '123456'},
        {firstName: 'John', lastName: 'Smith06', email: 'mail06@mail.com', password: '123456'},
    ]

    try {
        for (const user of users) {
            await UserModel.create(user)
            console.log(`${user.lastName} created`)
        }
        disconnect()
    } catch (e) {
        console.error(e)
    }
})()

