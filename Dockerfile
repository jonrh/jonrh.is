FROM nginx

# Copy the contents of the www folder to a folder for Nginx to serve
COPY www /usr/share/nginx/html


# To build:
# docker build -t jonrh-v1 .

# To run:
# docker run --name jonrh-v1-running -d -p 8080:80 jonrh-v1