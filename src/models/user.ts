import { Document, Schema, Model, model } from "mongoose"
import { User } from "../components/user"

export interface IUserModel extends User.createUser, Document {}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: Number, required: true },
  isActive: { type: String, required: true }
})

export const UserModel: Model<IUserModel> = model<IUserModel>(
  "User",
  UserSchema
)
