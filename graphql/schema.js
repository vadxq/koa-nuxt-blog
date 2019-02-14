// import {
//   graphql,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLID,
//   GraphQLList,
//   GraphQLNonNull,
//   isOutputTyp,
//   GraphQLEnumType,
//   GraphQLScalarType
// } from 'graphql';

// import mongoose from 'mongoose';
// const List = mongoose.model('List');

// // 定义文章数据类型
// let ArticleType = new GraphQLObjectType({
//   name: 'article',
//   fields: {
//     _id: {
//       type: GraphQLID
//     },
//     title: {
//       type: GraphQLString
//     },
//     createtime: {
//       type: GraphQLString
//     },
//     updatetime: {
//       type: GraphQLString
//     },
//     views: {
//       type: GraphQLEnumType
//     },
//     links: {
//       type: GraphQLEnumType
//     },
//     description: {
//       type: GraphQLString
//     },
//     content: {
//       type: GraphQLString
//     },
//     coverimg: {
//       type: GraphQLString
//     },
//     checked: {
//       type: GraphQLScalarType
//     },
//     dele: {
//       type: GraphQLScalarType
//     }
//   }
// })

// // 获取已发表文章列表
// const fetchArticle = {
//   type: new GraphQLList(ArticleType),
//   args: {},
//   resolve (root, params, options) {
//     return List.find({
//       dele: false,
//       checked: true
//     }, {
//       _id: 1,
//       title: 1,
//       content: 1,
//       createtime: 1,
//       updatetime: 1,
//       views: 1,
//       links: 1,
//       description: 1,
//       coverimg: 1
//     }).exec()
//   }
// }

// // 获取所有文章列表
// const fetchAllArticle = {
//   type: new GraphQLList(ArticleType),
//   args: {},
//   async resolve (root, params, options) {
//     return List.find({
//       dele: false
//     }, {
//       _id: 1,
//       title: 1,
//       content: 1,
//       createtime: 1,
//       updatetime: 1,
//       views: 1,
//       links: 1,
//       description: 1,
//       coverimg: 1,
//       checked: 1
//     }).exec()
//   }
// }

// const articles = {
//   type: ArticleType,
//   args: {
//     id: {
//       name: 'id',
//       type: new GraphQLNonNull(GraphQLID)
//     }
//   },
//   resolve (root, params, options) {
//     return List.findOne({_id: params.id, dele: false},).exec()
//   }
// }

// export default new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Queries',
//     fields: {
//       fetchArticle,
//       fetchAllArticle,
//       articles
//     }
//   })
// })