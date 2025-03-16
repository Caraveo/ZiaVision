#!/bin/bash

# Get the EC2 instance's public IP
INSTANCE_IP=$(aws ec2 describe-instances \
    --filters "Name=tag:Name,Values=ziavision-env3" \
    --query "Reservations[].Instances[].PublicIpAddress" \
    --output text)

if [ -z "$INSTANCE_IP" ]; then
    echo "Error: Could not find EC2 instance IP"
    exit 1
fi

echo "Deploying to EC2 instance at $INSTANCE_IP"

# Copy the deployment package
scp -i ~/.ssh/aws-eb deployment.zip ec2-user@$INSTANCE_IP:/tmp/

# SSH into the instance and deploy
ssh -i ~/.ssh/aws-eb ec2-user@$INSTANCE_IP "sudo bash -c '
    cd /var/www/html && \
    cp /tmp/deployment.zip . && \
    unzip -o deployment.zip && \
    rm deployment.zip && \
    systemctl restart nginx
'"

echo "Deployment complete!" 