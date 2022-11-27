FROM node:19-alpine as build

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install
RUN npx run build

FROM node:19-alpine

COPY --from=build /app/build /app/build
COPY package.json /app/node
COPY package-lock.json /app/node

WORKDIR /app/node

RUN npm install --production

EXPOSE 3000

RUN npx serve -l 3000 /app/build