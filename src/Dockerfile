# dokcerfile
FROM node:latest

RUN mkdir -p /src
WORKDIR /src

#移动文件
COPY . /src

RUN rm -rf package-lock.json

RUN npm install

RUN npm build

#解决nuxtjs问题
ENV NODE_ENV=production
ENV HOST 0.0.0.0

EXPOSE 3000

CMD ["npm", "start" ]
# CMD ["sh", "rebuild.sh"]
# CMD cnpm install && mkdir -p deploy && npm run build && cp -r ./dist/* ./deploy