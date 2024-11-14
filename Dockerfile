# Use the Node.js 14 image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files, including the public directory
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Start the app
CMD ["npm", "start"] 
