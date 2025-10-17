# frontend/Dockerfile
FROM node:20

WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

EXPOSE 8050

CMD ["npm","run","preview"]