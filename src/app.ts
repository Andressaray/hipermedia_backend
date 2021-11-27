import express, { Router, json, urlencoded, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { routes } from './routes/routes'
import DB from './config/db'

DB()

const app = express()
const router = Router()

app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(express.static('uploads'))
app.use('/api', router)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*') 
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method') 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE') 
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE') 
    next() 
})

router.get('/' , (req: Request, res: Response) => {
    res.json({
        message: 'Hellow Api'
    })
})

routes(router)

export default app