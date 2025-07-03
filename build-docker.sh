#!/bin/bash

# NovaGent Docker Build Script

set -e

echo "? Building NovaGent Next.js Application..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "??  Warning: .env.local not found. Creating from example..."
    cat > .env.local << EOF
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Resend (for emails)
RESEND_API_KEY=your_resend_api_key
EOF
    echo "? Please update .env.local with your actual values"
    exit 1
fi

# Build the Docker image
echo "? Building Docker image..."
docker build -t novagent-app:latest .

# Option to run with docker-compose
read -p "Do you want to start the application with docker-compose? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "? Starting application with docker-compose..."
    docker-compose up -d
    echo "? Application is running at http://localhost:3000"
    echo "? View logs with: docker-compose logs -f"
else
    echo "? Docker image built successfully!"
    echo "To run the container manually:"
    echo "docker run -p 3000:3000 --env-file .env.local novagent-app:latest"
fi
