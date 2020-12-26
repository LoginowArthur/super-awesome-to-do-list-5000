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

WORKDIR /app

# Build project
COPY ./package.json /app/package.json
RUN npm install
COPY ./angular.json /app/angular.json
COPY ./tsconfig.json /app/tsconfig.json
COPY ./tsconfig.app.json /app/tsconfig.app.json

# Start app
ENTRYPOINT ["npm","run","start"]
