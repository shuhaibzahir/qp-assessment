# Use node version 16.18.0
FROM node:16.18.0 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript files
RUN npm run build

# Start a new stage
FROM node:16.18.0

# Set working directory
WORKDIR /app

# Copy only necessary files from the previous stage
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/dist ./dist

# Install only production dependencies
RUN npm install --production

# Expose port
EXPOSE 3000

# Set default port number
ENV PORT 3000

# Start the application
CMD ["node", "dist/index.js"]
