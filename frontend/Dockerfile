FROM node:18-alpine

WORKDIR /app
COPY ./build /app
COPY ./package.json /app

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]
