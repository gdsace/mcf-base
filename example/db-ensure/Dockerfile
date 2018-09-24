FROM node:8.12.0-alpine
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm install
COPY . /app
ENTRYPOINT [ "node", "/app/index.js" ]
