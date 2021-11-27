import { connect, connection } from 'mongoose'

import { DB } from './properties'

export default () => {
    connect(DB)
    .then(() => console.log(`Mongo connected`))
    .catch(err => console.log(`Mongo failed`, err))

    process.on('SIGINT', () => {
        connection.close(() => {
            console.log('Mongo disconeted')
            process.exit(0)
        })
    })
}