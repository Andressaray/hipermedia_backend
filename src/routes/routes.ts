import { Router } from 'express'

import { login, register } from '../controllers/user.controller'
import { verifyUser, verifyIsUser } from '../middlewares/user'


export const routes = (router: Router) => {
    router.post('/login', verifyIsUser, login)
    router.post('/register', verifyUser, register)
}
