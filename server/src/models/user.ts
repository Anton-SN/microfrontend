import { Schema, model } from 'mongoose';

type UserType = {
  email: string,
  password: string,
}

const schema  = new Schema<UserType>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model('User', schema)

export { UserModel, UserType }
