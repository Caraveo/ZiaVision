#!/bin/bash
# Check if Docker container is running
if ! docker ps | grep -q ziavision; then
    echo "Container is not running"
    exit 1
fi

# Check if nginx is running
if ! systemctl is-active --quiet nginx; then
    echo "Nginx is not running"
    exit 1
fi

# Check if application is responding
if ! curl -f http://localhost/health; then
    echo "Application is not responding"
    exit 1
fi

echo "Service validation successful"
exit 0 