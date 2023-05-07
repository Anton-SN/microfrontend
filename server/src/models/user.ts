import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

type UserType = {
  email: string,
  password: string,
  // tokens: { token: string }[]
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
  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true
  //     }
  //   }
  // ]
});

schema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// schema.methods.generateToken = async function() {
//   const user = this;
//   const token = jwt.sign({ _id: user._id.toString() }, secret, { expiresIn: '72h' });
//   user.tokens = user.tokens.concat({ token });
//   await user.save();
//   return token;
// };

// schema.statics.findByToken = async function(token) {
//   const User = this;
//   let decoded;
//   try {
//     if (!token) {
//       return new Error('Missing token header');
//     }
//     decoded = jwt.verify(token, secret);
//   } catch (error) {
//     return error;
//   }
//   return User.findOne({
//     // @ts-ignore
//     _id: decoded._id,
//     'tokens.token': token
//   })
// };

schema.static('findByCredentials', async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error('Unable to login. Wrong username!');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Unable to login. Wrong Password!');
  }
  return user;
});

const UserModel = model('User', schema)

export { UserModel, UserType }
