# ZiaVision

A modern, scalable Node.js application built for AWS deployment.

## Prerequisites

- Node.js >= 18.0.0
- Docker
- Docker Compose
- MongoDB (if running locally without Docker)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ziavision.git
cd ziavision
```

2. Create a `.env` file in the root directory:
```bash
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ziavision
```

3. Start the application using Docker:
```bash
docker-compose up --build
```

Or run locally:
```bash
npm install
npm run dev
```

## Development

- `npm run dev`: Start development server with hot-reload
- `npm test`: Run tests
- `npm run lint`: Run linting
- `npm run build`: Build for production

## Production Deployment

### AWS Deployment

1. Create an ECR repository
2. Build and push Docker image:
```bash
aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com
docker build -t ziavision .
docker tag ziavision:latest aws_account_id.dkr.ecr.region.amazonaws.com/ziavision:latest
docker push aws_account_id.dkr.ecr.region.amazonaws.com/ziavision:latest
```

3. Deploy to ECS/EKS using the provided Docker image

## Security

- Helmet.js for security headers
- Rate limiting enabled
- CORS configured
- Environment variables for sensitive data
- Production-grade logging with Winston

## License

MIT 