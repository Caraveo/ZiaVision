#!/bin/bash
# Start the application container
docker run -d --name ziavision -p 80:80 ziavision

# Restart nginx
systemctl restart nginx 