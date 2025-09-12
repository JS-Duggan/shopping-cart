FROM node:lts-alpine

WORKDIR /app

ENV PORT=80

COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]