import mongoose from 'mongoose';

const Schema = mongoose.Schema

const UserSchema = new Schema({
  date: { // 创建时间
    type: Date,
    default: Date.now()
  },
  name: String,
  username: String,
  email: String,
  password: String,
  token: String,
  isAdmin: {
    type: Boolean, // 是否管理员
    default: false
  },
  dele: {
    type: Boolean, // 删除状态
    default: false
  }
})

UserSchema.pre('save', function (next) { // 不支持箭头函数
  if (this.isNew) {
    this.date = Date.now();
  } else {
  }

  next()
})

export const User =  mongoose.model('User', UserSchema);