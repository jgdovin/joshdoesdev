---
title: "Getting your ship together"
date: "2024-04-09"
excerpt: "A first look at Docker"
tags: "docker,container,devops"
---

# Hello Docker

Getting started with Docker is really easy. Today, I'd like to explore creating a simple Node.js "Hello World" application, building the application within a Dockerfile, and running the application in a Docker container. This guide is designed for those new to Docker, providing a hands-on approach to understanding how Docker can be used to containerize and run a Node.js application. Let’s dive in!

## Step 1: Kickstarting your first voyage

First, create a new directory for your project and initalize a new node project.

```bash
mkdir hello-docker-nodejs
cd hello-docker-nodejs
npm init -y
```

Create a new file within the project `app.js`

```javascript
// app.js
const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Docker!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

This application sets up a simple `http` web server that will respond to requests on port :3000 with a 200 success code and the text "Hello, Docker!"

## Step 2: Setting Sail

To run your Node.js application in a Docker container, you need to create a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Here's how you can create one for your application:

In the root of your project directory, create a file named Dockerfile (without any extension) and add the following content:

```Dockerfile
# Use latest version of node 20
# https://hub.docker.com/_/node
FROM node:20

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy local code to the container image.
COPY . .

# Install production dependencies.
RUN npm install

# Service must listen to $PORT environment variable.
# This default value facilitates local development.
ENV PORT 3000

# Run the web service on container startup.
CMD [ "node", "app.js" ]
```

This dockerfile starts with a base image of Node 20 and prepares the environment to run your application. The code is commented throughout.

## Step 3: Crafting your Docker masterpiece

With `Dockerfile` in hand, you can proudly move on to building the damn thing.

```bash
docker build . -t hello-docker
```

This will build a Docker image from your `Dockerfile` and tag it as `hello-docker` Tagging is generally recommended so that you can easily identify your images when reviewing them.

After building your image, run your container:

```bash
docker run -p 3000:3000 hello-docker
```

Notice we are referencing our image by the tag we created before. Also the -p is very important, as it signifies to docker to expose the port 3000 within the container to port 3000 on your local machine. Without it, you will not be able to access your server.

## Step 4: Docking your ship

It's as easy as visiting http://localhost:3000 in your browser. You should see the message "Hello, Docker!" displayed

## Conclusion

Congratulations! You’ve just containerized and run your first Node.js application using Docker. This simple example demonstrates the power and ease of Docker for developing and deploying applications. Experiment further by modifying the application or Dockerfile to get a deeper understanding of Docker’s capabilities. Happy Dockering!
