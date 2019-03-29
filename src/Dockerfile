# dokcerfile
FROM node:10.15.2

RUN mkdir -p /src
WORKDIR /src

#移动文件
COPY . /src

# RUN rm -rf package-lock.json

RUN npm install

RUN npm run build
# RUN ./node_modules/.bin/nuxt build
# RUN node --trace-deprecation node_modules/nuxt/bin/nuxt-build
# 可怜,机器内存不足导致build失败...准备本地build.对应的将.nuxt移出.gitignore
# 正常模式在这里使用build
# 我又换了服务器。。。支持build了


#解决nuxtjs问题
ENV NODE_ENV=production
ENV HOST 0.0.0.0

EXPOSE 3000

CMD ["npm", "start" ]
