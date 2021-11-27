import { Schema, model } from 'mongoose'

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
); 

export default model<IUser>('user', userSchema)
