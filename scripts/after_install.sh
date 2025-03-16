#!/bin/bash
# Copy nginx configuration
cp /var/www/ziavision/nginx.conf /etc/nginx/nginx.conf

# Build Docker image
cd /var/www/ziavision
docker build -t ziavision .

# Clean up old containers
docker container prune -f 