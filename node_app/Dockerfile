FROM node:20-alpine

WORKDIR /home/node/app
    
RUN mkdir -p node_modules

RUN chown -R node:node /home/node/app/

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 5173 5174

CMD [ "npm","run","dev" ]

