FROM postgres
COPY CreateDatabase.sql /docker-entrypoint-initdb.d/
FROM node:alpine
WORKDIR /usr/back
COPY package*.json ./ 
RUN npm install
COPY . . 
EXPOSE 4000
CMD ["npm", "run", "dev"]