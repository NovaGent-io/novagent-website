# NovaGent Docker Deployment Guide

This guide helps you deploy the NovaGent Next.js application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier deployment)
- Environment variables configured

## Quick Start

1. **Set up environment variables**
   Create a `.env.local` file with your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   RESEND_API_KEY=your_resend_api_key
   ```

2. **Build and run with the script**
   ```bash
   ./build-docker.sh
   ```

## Manual Deployment

### Build the Docker image
```bash
docker build -t novagent-app:latest .
```

### Run with Docker
```bash
docker run -p 3000:3000 --env-file .env.local novagent-app:latest
```

### Run with Docker Compose
```bash
docker-compose up -d
```

## Production Deployment

### With Nginx (Recommended)
The docker-compose.yml includes an Nginx configuration for better static file serving:
```bash
docker-compose up -d
```

This will:
- Run the Next.js app on port 3000 (internal)
- Run Nginx on port 80 (external)
- Properly handle static file caching
- Prevent ChunkLoadError issues

### Environment Variables
Make sure to set these in production:
- `NODE_ENV=production`
- All Supabase credentials
- Any API keys needed

## Troubleshooting

### ChunkLoadError
If you encounter ChunkLoadError:
1. Ensure `output: 'standalone'` is set in next.config.mjs
2. Use the Nginx setup for proper static file serving
3. Clear browser cache and try again

### Build Issues
1. Check that all dependencies are properly installed
2. Ensure Node.js version compatibility (v20 recommended)
3. Check for TypeScript errors (though they're ignored in build)

### Container Health
Check container health:
```bash
docker ps
docker logs novagent-nextjs
```

## Monitoring

View logs:
```bash
# Single container
docker logs -f novagent-nextjs

# With docker-compose
docker-compose logs -f
```

## Scaling

For production scaling:
1. Use a container orchestration platform (Kubernetes, ECS, etc.)
2. Set up a CDN for static assets
3. Configure proper load balancing
4. Use environment-specific configurations

## Security Notes

1. Never commit `.env.local` to version control
2. Use secrets management in production
3. Keep Docker images updated
4. Use HTTPS in production (add SSL certificates to nginx config)
