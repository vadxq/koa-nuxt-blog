import mongoose from 'mongoose';

const Schema = mongoose.Schema

const ListSchema = new Schema({
  title: String, // 标题
  createtime: { // 创建时间
    type: Date,
    default: Date.now()
  },
  updatetime: { // 更新时间
    type: Date,
    default: Date.now()
  },
  views: {
    type: Number,
    default: 1
  }, // 浏览数
  links: {
    type: Number,
    default: 1
  }, // 点赞数
  description: String, // 简述
  content: String, // 内容
  coverimg: String, // 封面图
  checked: {
    type: Boolean, // 发表状态
    default: false
  },
  url: {
    type: String,
    index: true
  },
  dele: {
    type: Boolean, // 删除状态
    default: false
  }
})

ListSchema.pre('save', function (next) { // 不支持箭头函数
  if (this.isNew) {
    this.createtime = this.updatetime = Date.now();
  } else {
    this.updatetime = Date.now();
  }

  next()
})

ListSchema.pre('update', function () {
  this.updatetime = Date.now();
});

mongoose.model('List', ListSchema);