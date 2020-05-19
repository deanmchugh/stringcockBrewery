import { UserModel } from "../models/user/user.model"
import {Request, Response} from 'express'

module.exports = function(app: any) {
    app.post('/register', async (req: Request, res: Response) => {
        try {
            const user = new UserModel(req.body)
            const result = await user.save()
            res.send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    })

    app.post('/login', async (req: Request, res: Response) => {
        try {
            const user = await UserModel.findOne({
                email: req.body.email
            }).exec()
            if (!user) {
                return res.status(400).send({
                    message: 'No user exists'
                })
            }
            user.comparePassword(req.body.password, (error, match) => {
                if (!match) {
                    return res.status(400).send({
                        message: 'Password is invalid'
                    })
                }
            })
            res.send({
                message: 'user and password is correct'
            })
        } catch (error) {
            res.status(500).send(error)
        }
    })
}
