FROM node:18-alpine

WORKDIR /app
COPY ./package.json /app
RUN npm i
COPY ./build /app

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]
