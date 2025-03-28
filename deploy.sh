#!/bin/bash

# Install Node.js and pnpm if not already installed
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Install and configure Nginx
sudo apt update
sudo apt install -y nginx
sudo cp nginx.conf /etc/nginx/sites-available/ziavision
sudo ln -s /etc/nginx/sites-available/ziavision /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

# Install PM2 globally
sudo npm install -g pm2

# Install dependencies and build
pnpm install
pnpm build

# Start the application with PM2
pm2 start ecosystem.config.js

# Save PM2 process list and configure to start on system boot
pm2 save
pm2 startup

# Setup SSL with Certbot
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d ziavision.com -d www.ziavision.com -d ziawe.com -d www.ziawe.com -d ziateam.com -d www.ziateam.com --non-interactive --agree-tos --email your-email@ziavision.com

# Show status
echo "Deployment completed! Checking status..."
pm2 status
sudo systemctl status nginx 