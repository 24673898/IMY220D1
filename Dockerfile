FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build frontend
RUN npm run build:frontend

# Set environment variable
ENV PORT=1337

# Expose the port your app runs on
EXPOSE 1337

# Start the application
CMD ["node", "backend/dist/server.js"]