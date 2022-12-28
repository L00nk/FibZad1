# syntax=docker/dockerfile:1.2
## używam wieloetapowego budowania obrazów
FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
###########

FROM nginx AS runner

COPY --from=builder /app/public /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]

#FROM node:alpine as runner
#ENV NODE_ENV=production
#ENV NODE_OPTIONS=--openssl-legacy-provider

#COPY --from=builder /app /app
#WORKDIR /app
#RUN npm install

#CMD ["npm", "run", "start"]