FROM node:19-alpine as build

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM node:19-alpine

WORKDIR /app/node

COPY --from=build /app/build /app/build
COPY package.json /app/node
COPY package-lock.json /app/node

RUN npm install --production

EXPOSE 3000

CMD npx serve -l 3000 /app/build