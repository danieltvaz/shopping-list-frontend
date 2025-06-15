FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache bash

COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start"]