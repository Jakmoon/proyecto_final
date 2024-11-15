# Use the Node.js 14 image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Install BrowserSync globally
RUN npm install -g browser-sync

# Copy the rest of the project files
COPY . .

# Expose ports
EXPOSE 3000 3002

# Start the app using the command specified in docker-compose
CMD ["npm", "start"]
