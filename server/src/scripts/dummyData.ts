import {UserModel} from '../models/user/user.model'
import {connect, disconnect} from '../database/database'

(async () => {
    connect()

    const users = [
        {firstName: 'John', lastName: 'Smith07', email: 'mail07@mail.com', password: '1234567'}
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

