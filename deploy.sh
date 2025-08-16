#!/bin/bash

# Deploy to Deno Deploy using deployctl
echo "🚀 Deploying to Deno Deploy..."

# Set the API token
export DENO_DEPLOY_TOKEN="ddp_9K5Ms5BnP9sDueNSDUu7UP3dQtIw0dvu8gcj"

# Install deployctl if not already installed
if ! command -v deployctl &> /dev/null; then
    echo "📦 Installing deployctl..."
    deno install -A jsr:@deno/deployctl --global
fi

# Deploy the project
echo "🚀 Starting deployment..."
deployctl deploy --prod --project=amazon-api-migrate --entrypoint=main.ts

echo "✅ Deployment complete!"
echo "🌐 Check your deployment at https://dash.deno.com/"