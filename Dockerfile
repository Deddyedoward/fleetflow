FROM node:20-alpine

EXPOSE 8080

USER node

WORKDIR /app

COPY --chown=node:node package.json ./

RUN npm install

RUN npm install typescript

COPY --chown=node:node . .

RUN npx tsc

CMD ["npm", "start"]
