FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

COPY config/nginx.config /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
