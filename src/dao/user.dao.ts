import mongoose from 'mongoose'

import { userSchema } from '../models/user.model'

userSchema.statics = {
  create: function (data: any, cb: any) {
    const user = new this(data)
    user.save(cb)
  }
}
const userModel = mongoose.model('users', userSchema)
module.exports  = userModel
  