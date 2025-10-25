# -------------------------
# Frontend Dockerfile
# -------------------------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the files and build the React app
COPY . .
RUN npm run build

# -------------------------
# Serve the built app with Nginx
# -------------------------
FROM nginx:alpine

# Copy build output to Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose frontend port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
