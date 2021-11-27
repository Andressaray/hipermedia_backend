import userModel from '../models/user.model'

export const getUserEmail = async (email: string) => {
  const user = await userModel.findOne({ email })
  return user
}