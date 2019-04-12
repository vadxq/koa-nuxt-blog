import mongoose from 'mongoose';

const Schema = mongoose.Schema

const UrllinksSchema = new Schema({
  date: { // 创建时间
    type: Date,
    default: Date.now()
  },
  avtor: String,
  username: String,
  url: String,
  weight: String, // 权重
  dele: {
    type: Boolean, // 删除状态
    default: false
  }
})

UrllinksSchema.pre('save', function (next) { // 不支持箭头函数
  if (this.isNew) {
    this.date = Date.now();
  } else {
  }

  next()
})

export const Urllinks =  mongoose.model('Urllinks', UrllinksSchema);