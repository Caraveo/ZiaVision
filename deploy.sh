#!/bin/bash

# Set variables
EC2_HOST="34.211.206.177"
EC2_USER="ec2-user"
APP_DIR="/var/www/ziavision"

# Copy build files to EC2
echo "Copying build files to EC2..."
scp -r build/* $EC2_USER@$EC2_HOST:$APP_DIR/

# SSH into EC2 and set permissions
echo "Setting permissions..."
ssh $EC2_USER@$EC2_HOST "sudo chown -R ec2-user:ec2-user $APP_DIR && \
                         sudo chmod -R 755 $APP_DIR && \
                         sudo systemctl restart nginx"

echo "Deployment complete! Application is live at http://$EC2_HOST" 