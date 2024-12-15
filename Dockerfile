# Build stage
FROM node:20-alpine as build

WORKDIR /app

RUN apk add --no-cache yarn

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]