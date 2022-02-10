FROM nginx:1.17-alpine


COPY ./storybook-static /usr/share/nginx/html/

# Default port exposure
EXPOSE 80
