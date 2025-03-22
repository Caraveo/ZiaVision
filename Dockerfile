# Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy client files
COPY client/package*.json client/
RUN cd client && npm install

# Copy all files
COPY . .

# Build client
RUN cd client && npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built files
COPY --from=builder /app/client/build ./client/build
COPY package*.json ./
COPY server.js ./

# Install production dependencies
RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"] 