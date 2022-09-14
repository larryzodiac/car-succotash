FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY ./dist/index.js ./

EXPOSE 8080
CMD [ "node", "index.js" ]