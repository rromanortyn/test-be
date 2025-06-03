FROM node:slim

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN apt-get update -y && apt-get install -y openssl
