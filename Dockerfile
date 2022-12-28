# syntax=docker/dockerfile:1.2
## używam wieloetapowego budowania obrazów
FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .
###########

FROM node:alpine as runner
ENV NODE_ENV=production
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY --from=builder /app /app
WORKDIR /app
RUN npm install

CMD ["npm", "run", "start"]