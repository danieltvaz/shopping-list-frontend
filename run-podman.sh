#!/bin/bash
set -e
set -a
source .env
set +a

IMAGE_NAME="shopping-list-front:dev"
CONTAINER_NAME="shopping-list-front"

podman rm -f $CONTAINER_NAME 2>/dev/null || true


podman build -t $IMAGE_NAME -f Dockerfile .

echo "🚀 Starting Frontend..."
podman run -d \
  --name $CONTAINER_NAME \
  -w /app \
  -p $PORT:$PORT \
  -e CHOKIDAR_USEPOLLING=true \
  -e BROWSER=none \
  -e FAST_REFRESH=true \
  -e WATCHPACK_POLLING=true \
  -v ./:/app \
  $IMAGE_NAME


echo "✅ Frontend running on http://localhost:$PORT"
