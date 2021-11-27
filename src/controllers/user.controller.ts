import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'

import response from '../response'
import { IUser } from '../interfaces/user/user.create'
import userModel from '../models/user.model'
import { getUserEmail } from '../helpers/user'

export const register = async (req: Request, res: Response) => {
    try {
        const dataUser : IUser = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        }
        userModel.create(dataUser, async (err, newUser) => {
            if(err) {
                response().error({
                    res,
                    text: err
                })
                return
            }
            response().success({
                res,
                body: newUser
            })
            return 
        })
    } catch (err) {
        response().error({
            res,
            text: err
        })
        return
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const dataUser : IUser = {
            email: req.body.email,
            password: req.body.password
        }
        const user = await getUserEmail(dataUser.email)
        if(!user){
            return
        }
        const isPassword = bcrypt.compareSync (
            dataUser.password, user.password
        )
        if(isPassword){
            response().success({
                res,
                body: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                }
            })
            return
        }
        response().error({
            res,
            text: 'Email or password is invalid'
        })
    } catch (err) {
        response().error({
            res,
            text: err
        })
    }
}