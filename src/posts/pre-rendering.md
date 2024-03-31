---
title: "Two Forms of Pre-rendering"
date: "2024-03-03"
---

# Creating a Button Component in React

Creating reusable components is at the heart of React's philosophy. In this tutorial, we'll walk through the steps to create a simple, reusable button component. This will not only help us understand the basics of React component creation but also the power of reusability in React.

## Prerequisites

Before we dive into creating our button component, make sure you have the following:

- Node.js installed on your machine.
- A basic understanding of React.
- A React project setup (Create React App is a good starter).

## Step 1: Create a Button Component

In your React project, create a new file called `Button.js` in the `src` directory. This file will contain our Button component code.

## Step 2: Add Code for the Button Component

Open the `Button.js` file and add the following React code:

```jsx
import React from "react";

const Button = ({ text, onClick, type = "button", className }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
```

export default Button;

This code snippet creates a functional component named `Button` that takes in props for text, onClick event, button type, and className. The button type defaults to 'button' if not provided. The className allows for additional styling to be applied from the parent component.

## Step 3: Styling the Button

For a simple styling of the button, create a CSS file named `Button.css` and import it into your `Button.js` file:

```css
/* Button.css */
.btn {
  padding: 10px 20px;
  border: none;

Continue with your preferred styling. Remember to import the CSS file into your `Button.js` file:

import './Button.css';
```

## Conclusion

You've now created a simple, reusable button component in React that can be styled and customized with props. This approach to component creation allows for greater flexibility and reusability across your React projects.

Happy coding!
