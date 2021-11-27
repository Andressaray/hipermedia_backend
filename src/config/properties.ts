import { config } from 'dotenv'
config()

const PORT: number | string = process.env.PORT || 3000
//@ts-ignore
const DB: string = process.env.DB

export {
    PORT, DB
}