import { Request, Response, NextFunction } from 'express'

import response from '../response'
import { getUserEmail } from '../helpers/user'

export const verifyIsUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const isUser = await getUserEmail(req.body.email)
    if(!isUser) {
      response().error({
        res,
        text: 'Usuario no existe'
      })
      return
    }
    next()
    return
  } catch (err) {
    response().error({
      res,
      text: err
    })
  }
}

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const isUser = await getUserEmail(req.body.email)
    if(!isUser) {
      next()
      return
    }
    response().error({
      res,
      text: 'Ya existe este correo'
    })
    return
  } catch (err) {
    response().error({
      res,
      text: err
    })
  }
}