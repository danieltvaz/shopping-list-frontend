#!/bin/bash
set -e
set -a
source .env
set +a

IMAGE_NAME="shopping-list-front:dev"
CONTAINER_NAME="shopping-list-front"

docker rm -f $CONTAINER_NAME 2>/dev/null || true


docker build -t $IMAGE_NAME -f Dockerfile .

echo "🚀 Starting Frontend..."
docker run -d \
  --name $CONTAINER_NAME \
  -w /app \
  -p $PORT:$PORT \
  -e CHOKIDAR_USEPOLLING=true \
  -e BROWSER=none \
  $IMAGE_NAME


echo "✅ Frontend running on http://localhost:$PORT"
