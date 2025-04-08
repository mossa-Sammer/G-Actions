FROM node:22.14.0-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV PORT=3000

EXPOSE 3000

CMD ["npm","start"]




