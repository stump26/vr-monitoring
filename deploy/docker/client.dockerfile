FROM node:12.18.1

RUN yarn global add serve 

WORKDIR /usr/src/web
COPY . .
RUN yarn install

RUN yarn build:web

EXPOSE 3000

CMD ["serve", "-l","3000","./packages/client/build"]