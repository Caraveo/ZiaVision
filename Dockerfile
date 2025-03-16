# Build stage
FROM node:18 as build

WORKDIR /usr/src/app

# Copy package files
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy client source code
COPY client/ ./

# Build React app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 