### STAGE 1: Build ###
FROM node:19-alpine AS build
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
#COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/my-app /usr/share/nginx/html
EXPOSE 80
