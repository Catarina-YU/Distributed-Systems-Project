FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 🔥 força permissão nos binários
RUN chmod +x node_modules/.bin/*

# compila o TS
RUN node node_modules/typescript/bin/tsc

EXPOSE 3333

CMD ["npm", "run", "start"]
