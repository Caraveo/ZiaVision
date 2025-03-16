#!/bin/bash
# Install dependencies
yum update -y
yum install -y docker nginx

# Start Docker service
systemctl start docker
systemctl enable docker

# Create application directory
mkdir -p /var/www/ziavision
chmod -R 755 /var/www/ziavision 