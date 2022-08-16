FROM node:16-alpine AS builder

# Create app directory
WORKDIR /app

# Copy the dependencies file
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install --silent --only=production

# Bundle app source
COPY . .

# Run on port 3000
EXPOSE 3000

# Run app
CMD ["/bin/sh","./scripts/start.sh"]
