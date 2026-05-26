FROM node:20-alpine

WORKDIR /app

COPY --chown=node:node package*.json ./
RUN npm install -g npm@latest && npm install --production

COPY --chown=node:node . .

USER node

EXPOSE 80

CMD ["node", "index.js"]
