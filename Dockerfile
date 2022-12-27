# syntax=docker/dockerfile:1.2

FROM node:alpine

WORKDIR '/app'
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package.json .

RUN npm install

CMD ["npm", "run", "start"]