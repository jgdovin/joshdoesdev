---
title: "Debugging Node with Dev Containers"
date: "2024-12-01"
excerpt: "Tired of the classic \"it works on my machine\" problems? Dive into our step-by-step guide on setting up a consistent Node.js development environment using VS Code's Dev Containers and Docker. Learn how to create a Node.js project with Express, run it inside a container, and harness the power of VS Code's debugger to replace those pesky console.log statements with proper breakpoints. Streamline your workflow and make debugging a breeze!"
tags: "dev,node,containers"
published: true
---

## Introduction

Are you tired of the classic "it works on my machine" problem? Do you want a consistent development environment that makes debugging Node.js applications a breeze? Look no further! In this tutorial, we'll walk through setting up a Node.js project using Express, configuring it to run inside a Docker container with Visual Studio Code's Dev Containers, and leveraging the built-in debugger to replace those pesky `console.log` statements with proper breakpoints.

**Note:** While this tutorial is based on a Node.js project, the concepts can be adapted to other tech stacks as needed.

## Prerequisites

- **Visual Studio Code** installed
- **Docker** installed and running
- Familiarity with **Node.js** and **Express**
- **pnpm** installed (optional, you can use `npm` or `yarn` if you prefer)

## Setting Up the Project

Let's start by creating a new Node.js project. I personally use `pnpm` for package management, but feel free to use your preferred tool.

```bash
  mkdir node-debugging
  cd node-debugging
  pnpm init
```

Now we have a basic Node.js project. Next, we'll install Express to set up a simple web server.

```bash 
  pnpm install express
```

Create an `index.js` file in your project directory with the following content:

```javascript
  const express = require('express');
  const app = express();

  const port = 3000;

  app.get('/', function (req, res) {
    res.send('Hello World');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
```

Run your application:

```bash
  node index.js
```

Visit `http://localhost:3000` in your browser. If you see "Hello World", congratulations! Your server is up and running.

## Introducing Dev Containers

Now, let's bring in the star of the show: **Dev Containers**. This extension allows you to develop inside a Docker container, providing a consistent and reproducible environment.

### Why Use Dev Containers?

- **Consistency:** Develop with the same OS and tools as your deployment environment.
- **Isolation:** Switch between different projects without affecting your local setup.
- **Onboarding:** Make it easy for new team members to get started.
- **Experimentation:** Try out new technologies safely.

### Step 1: Install the Dev Containers Extension

In Visual Studio Code, go to the Extensions tab and search for **Dev Containers**. Install the extension provided by Microsoft.

### Step 2: Create a Dev Container Configuration

Create a `.devcontainer` directory in your project root and add a `devcontainer.json` file with the following content:

```json
  {
    "name": "Node.js Dev Container",
    "image": "mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm",
    "appPort": [3000]
  }
```

**Note:** The image uses a stable version of Node.js. You can choose a different tag if needed.

### Step 3: Reopen in Container

Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette, then select **Dev Containers: Reopen in Container**.

VS Code will build and launch the container based on your configuration, opening your project inside it.

## Configuring the Debugger

To debug our application, we'll set up a launch configuration.

Create a `.vscode` directory in your project root and add a `launch.json` file:

```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Debugger",
        "program": "${workspaceFolder}/index.js",
        "console": "integratedTerminal"
      }
    ]
  }
```

This configuration tells VS Code how to launch and debug your Node.js application.

## Enhancing the Application

Let's add some code to make our application more interactive and to give us something to debug.

Update your `index.js` file:

```javascript
  const express = require('express');
  const app = express();

  const port = 3000;

  app.get('/', function (req, res) {
    const { name } = req.query;
    debugger;
    if (name) {
      return res.send(`Hello, ${name}!`);
    }
    return res.send('Hello, World!');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
```

**What's New:**

- We added a query parameter `name` to personalize the greeting.
- Inserted a `debugger;` statement to act as a breakpoint.

## Debugging the Application

### Step 1: Start the Debugger

In VS Code, go to the **Run and Debug** tab, select **Launch Debugger**, and click the **Start Debugging** button.

### Step 2: Trigger the Breakpoint

Open your browser and navigate to `http://localhost:3000`.

Your application will pause execution at the `debugger;` line. You'll notice the **Debug** toolbar in VS Code becomes active.

### Step 3: Inspect Variables

In the **Variables** panel, you can inspect the `req` and `res` objects. You'll see that `req.query.name` is `undefined` since we haven't provided a name.

### Step 4: Test with a Query Parameter

Now, navigate to `http://localhost:3000?name=Alice`.

The debugger will pause again. This time, `req.query.name` should be `"Alice"`. You can see how the `if` condition will now be `true`, and the personalized greeting will be sent.

### Step 5: Use the Debug Console

In the **Debug Console**, you can execute JavaScript expressions in the context of the paused application. Try typing `name` to see its value.

### Step 6: Continue Execution

Press **F5** or click the **Continue** button to resume execution. Your browser will display the personalized greeting.

## Conclusion

You've successfully set up a Node.js development environment using Dev Containers and configured VS Code for debugging. By leveraging Docker and Dev Containers, you ensure a consistent environment that mirrors production, making "it works on my machine" a thing of the past.

**Benefits Recap:**

- **Consistency:** Same environment across all team members.
- **Isolation:** Keep your local machine clean.
- **Efficiency:** Use breakpoints and the debugger instead of `console.log`.
- **Productivity:** Faster onboarding and easier context switching between projects.

Happy coding!

---

Feel free to customize and extend this setup to suit your development workflow. The possibilities with Dev Containers are vast, including using custom Dockerfiles, Docker Compose, and more.
