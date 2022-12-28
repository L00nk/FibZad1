# syntax=docker/dockerfile:1.2
## używam wieloetapowego budowania obrazów
FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
###########

FROM nginx:latest AS runner

COPY --from=builder /app/public /usr/share/nginx/html

#WORKDIR /usr/share/nginx/html

#CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
