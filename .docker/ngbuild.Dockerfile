# Builder layer
ARG NODE_VERSION=14.15.3-alpine3.12
FROM node:${NODE_VERSION} as node-angular-cli

RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

ARG ANGULAR_CLI_VERSION=10.2.0
RUN echo Angular version: ${ANGULAR_CLI_VERSION}

RUN npm install -g @angular/cli@${ANGULAR_CLI_VERSION}

# Build project
WORKDIR /build

COPY ./package.json /build/package.json
RUN npm install
COPY ./angular.json /build/angular.json
COPY ./tsconfig.json /build/tsconfig.json
COPY ./tsconfig.app.json /build/tsconfig.app.json
COPY ./src /build/src

# RUN ng build --watch --delete-output-path false --outputPath /build/dist
RUN ng build --outputPath /build/dist

# Web server layer
FROM nginx:alpine

COPY --from=node-angular-cli /build/dist /usr/share/nginx/html
COPY ./.docker/nginx.conf /etc/nginx/nginx.conf
# COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
