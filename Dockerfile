# syntax=docker/dockerfile:1.2
## używam wieloetapowego budowania obrazów
FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
###########

FROM node:alpine as runner
ENV NODE_ENV=production
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY --from=builder /app/public /app/public
WORKDIR /app/public
EXPOSE 3000
#RUN npm install
#CMD ["node", "index.js"]
CMD ["index.js"]