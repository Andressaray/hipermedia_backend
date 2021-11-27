import { Response } from 'express'
interface response {
    res: Response,
    status?: number,
    text?: string | any,
    body?: [] | {}
}

export {
    response
}