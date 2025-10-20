FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

RUN npm run build


FROM nginx:alpine

# Copy the build output from the 'builder' stage into the Nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (the default Nginx port)
EXPOSE 80

