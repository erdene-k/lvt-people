FROM node:16

WORKDIR /app

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install

RUN npm start


WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install

COPY backend/ .

CMD ["npm", "run", "dev"]