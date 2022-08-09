FROM node:alpine
WORKDIR /usr/back
COPY package*.json ./ 
RUN npm install
COPY . . 
EXPOSE 4000
CMD ["npm", "run", "dev"]