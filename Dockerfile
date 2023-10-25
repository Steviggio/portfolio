FROM node

RUN mkdir /app && chown node:node /app
WORKDIR /app

COPY package.json ./

RUN npm install 

COPY --chown=node:node . .

EXPOSE 5173

CMD ["npm", "run", "dev"]