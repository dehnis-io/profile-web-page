# Use official Nginx image
FROM nginx:alpine

ENV profile_webpage_app_env=Production 

LABEL maintainer="dennis@axp-com.com"
LABEL version="0.0.1"


# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your static website files to Nginx’s web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server (already handled by base image) - it is using the official nginx engine declared CMD
#CMD [ "nginx", "-g", "daemon off;" ]