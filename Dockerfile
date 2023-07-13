FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN apk add git

RUN git config --global user.name "andresNeveu"

RUN git config --global user.email "victor.sapuyes@correounivalle.edu.co"

RUN git config --global --add safe.directory /usr/src/app

COPY . .

CMD ["npm","run","dev"]