import mongoose, {
  PassportLocalModel,
  PassportLocalDocument,
  PassportLocalSchema,
} from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

import { User } from '@api/user'
// import { schemaRequireAll } from '@/util/schema'

export interface UserDoc extends User, PassportLocalDocument {}

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
  },
  discordId: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
    sparse: true,
  },
  name: {
    type: String,
    required: true,
  },
})

// schemaRequireAll(UserSchema)
UserSchema.plugin(passportLocalMongoose, {
  usernameField: '_id',
})

export const UserModel: PassportLocalModel<UserDoc> = mongoose.model(
  'User',
  UserSchema as PassportLocalSchema,
)
