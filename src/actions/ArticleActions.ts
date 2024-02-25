"use server";

const mockArticles = [
  {
    title: "Embracing the Future with React Hooks",
    date: "March 1, 2024",
    description: "This article explores how React Hooks revolutionize the way developers build user interfaces, making code more readable and maintainable.",
    body: "React Hooks have transformed the landscape of React development by providing a simpler and more powerful way to use state and other React features without writing a class. Introduced in React 16.8, Hooks allow developers to leverage state and lifecycle methods within functional components, leading to cleaner and more concise code. This article dives into the basics of Hooks, such as useState and useEffect, and demonstrates how they can be used to build dynamic and responsive applications. By embracing Hooks, developers can write applications that are not only easier to understand and maintain but also more performant and scalable."
  },
  {
    title: "The Rise of React: A Journey Through Time",
    date: "February 27, 2024",
    description: "An in-depth analysis of how React became the go-to library for web developers and the impact it has had on web development practices.",
    body: "Since its inception by Facebook in 2013, React has grown to become one of the most popular JavaScript libraries for building user interfaces. This article traces the evolution of React, from its early days of challenging the status quo with its virtual DOM and component-based architecture to its current state as a powerhouse in the web development world. We will explore key milestones in React's development, including the introduction of JSX, Hooks, and the shift towards a more functional programming approach. Through interviews with industry experts and analysis of trend data, we uncover how React has shaped and been shaped by the needs of developers and businesses alike."
  },
  {
    title: "React and TypeScript: A Match Made in Heaven",
    date: "February 28, 2024",
    description: "Discover how the combination of React and TypeScript enhances developer productivity, code quality, and application maintainability.",
    body: "Combining React's intuitive component-based architecture with TypeScript's static typing offers developers a powerful toolkit for building robust and scalable web applications. This article delves into the synergies between React and TypeScript, illustrating how TypeScript's type system can help catch errors at compile time, improve code readability, and make the development process more efficient. Through practical examples and expert insights, we will explore best practices for integrating TypeScript into React projects, from setting up the development environment to defining types for props, state, and events. Whether you're a seasoned developer or new to the React ecosystem, this article will provide valuable insights into leveraging TypeScript to its full potential."
  },
  {
    title: "Optimizing React Applications for Performance",
    date: "March 1, 2024",
    description: "A comprehensive guide to identifying and addressing common performance bottlenecks in React applications to ensure smooth and responsive user experiences.",
    body: "Performance optimization is crucial for maintaining the responsiveness and user experience of React applications. This article explores practical strategies for optimizing React apps, including effective use of React's built-in performance optimization features like memoization, lazy loading components, and leveraging the React Profiler. We will also discuss common pitfalls that lead to performance issues, such as unnecessary re-renders and state management problems, and how to avoid them. Through real-world examples and expert advice, developers will learn how to diagnose performance problems using tools like Chrome DevTools and how to implement optimization techniques that make a real difference in the speed and efficiency of their React applications."
  },

]

export async function getArticlePreviews(count?: number) {
  return mockArticles.slice(0, count);
}