import mongoose from 'mongoose';
import sm from 'sitemap';
require('../mongo/schema/list');
import fs from 'fs';
const List = mongoose.model('List');

export const getSitemap = async (ctx, next) => {
  console.log('aaaa')
  const info = await List.find({
    dele: false,
    checked: true
  }, {
    url: 1,
    title: 1,
    createtime: 1,
    updatetime: 1,
    views: 1,
    links: 1,
    description: 1,
    coverimg: 1
  });
  console.log(info)

  let smOption = {
    hostname: 'https://blog.vadxq.com',
    cacheTime: 600000,
    urls: [
      {
        url: `/`,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date()
      },
      {
        url: `/post`,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date()
      },
      {
        url: `/me`,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date()
      }
    ]
  }
  if (info.length) {
    info.forEach(art => {
      smOption.urls.push({
        url: `/article/${art.url}`,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date(art.createtime)
      })
    })
  }
  let xml = sm.createSitemap(smOption).toString()
  console.log(xml)
  ctx.response.type = 'xml';
  // ctx.response.body = fs.createReadStream(xml);
  ctx.response.body = xml
};