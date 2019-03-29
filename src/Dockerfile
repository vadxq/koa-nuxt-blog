# dokcerfile
FROM node:10.15.2

RUN mkdir -p /src
WORKDIR /src

#移动文件
COPY . /src

# RUN rm -rf package-lock.json

RUN npm install

# RUN npm run build
RUN ./node_modules/.bin/nuxt build

#解决nuxtjs问题
ENV NODE_ENV=production
ENV HOST 0.0.0.0

EXPOSE 3000

CMD ["npm", "start" ]
