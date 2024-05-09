FROM node:20-alpine3.18

WORKDIR /app/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "start" ]
