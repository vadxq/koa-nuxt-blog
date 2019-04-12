import mongoose from 'mongoose';

const Schema = mongoose.Schema

const SwaperSchema = new Schema({
  date: { // 创建时间
    type: Date,
    default: Date.now()
  },
  cover: String, // 封面
  title: String, // 考虑可有可无
  url: String, // 链接定向
  weight: String, // 权重
  dele: {
    type: Boolean, // 删除状态
    default: false
  }
})

SwaperSchema.pre('save', function (next) { // 不支持箭头函数
  if (this.isNew) {
    this.date = Date.now();
  } else {
  }

  next()
})

export const Swaper =  mongoose.model('Swaper', SwaperSchema);