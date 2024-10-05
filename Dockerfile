FROM node:alpine as angular
WORKDIR /usr/local/app
COPY ./ /usr/local/app/

RUN npm install
RUN npm run build
FROM nginx:latest

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /usr/local/app/dist/angular-ki-demo /usr/share/nginx/html

EXPOSE 80

