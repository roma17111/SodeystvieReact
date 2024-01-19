FROM node:alpine as build
WORKDIR /build
ENV PATH /build/node_modules/.bin:$PATH
COPY ./ ./

RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /build /opt/web/
COPY . .
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/conf.d/ /etc/nginx/conf.d/
EXPOSE 3000 443
CMD ["nginx", "-g", "daemon off;"]