FROM node:16.14-alpine

WORKDIR /cafeone-admin

COPY package.json yarn.lock ./
COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start" ]