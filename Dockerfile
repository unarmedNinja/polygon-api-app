# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Set environment variables (override in production as needed)
ENV NODE_ENV=production
ENV POLYGON_API_KEY=key

# Start the application
CMD ["npm", "start"]