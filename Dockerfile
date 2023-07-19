FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN apt install git && git config --global user.name "andresNeveu" && git config --global user.email "victor.sapuyes@correounivalle.edu.co" && git config --global --add safe.directory /usr/src/app

COPY . .

CMD ["npm","run","dev"]