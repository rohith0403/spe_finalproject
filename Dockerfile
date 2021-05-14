# # Step 1

# FROM node:10-alpine as build-step

# RUN mkdir /app

# WORKDIR /app

# COPY client/package.json /app

# RUN npm install

# COPY client /app
# # RUN npm run build
# COPY server /app
# # RUN npm install /app/server

# # Stage 2


# FROM nginx:1.17.1-alpine

# COPY --from=build-step /app/build /usr/share/nginx/html

FROM node:10.16-alpine

# Create App Directory
RUN mkdir /app
WORKDIR /app

# Install Dependencies
COPY ./server /app

# COPY server/package.json /app

RUN npm install

# Copy app source code

# Exports
EXPOSE 5000

CMD ["npm","start"]