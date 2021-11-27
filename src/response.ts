import { response } from './interfaces/response'
export default function() {
    return {
        success: (args: response) => {
            args.res.status(args.status || 201).send({
                success: true,
                text: args.text || 'Successful request',
                body: args.body || {}
            })
    
        }, 
        error: (args: response) => {
            args.res.status(args.status || 404).send({
                success: false,
                text: args.text || 'Server error'
            })
        }
    }
}
