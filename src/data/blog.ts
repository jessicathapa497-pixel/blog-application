export const blogs = [
  {
    id: "1",
    title: "React Basics",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM using a virtual DOM. Core concepts include components, props, state, and JSX.",
  },
  {
    id: "2",
    title: "JSX Explained",
    content:
      "JSX is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code inside JavaScript. JSX is transformed into React.createElement calls during compilation.",
  },
  {
    id: "3",
    title: "State and Props",
    content:
      "Props are used to pass data from parent to child components, while state is used to manage data within a component. State changes trigger re-renders, making the UI dynamic and interactive.",
  },
  {
    id: "4",
    title: "Handling Events in React",
    content:
      "React handles events using synthetic events, which wrap native browser events. Event handlers are written in camelCase and passed as functions, enabling controlled and predictable UI interactions.",
  },
  {
    id: "5",
    title: "Conditional Rendering",
    content:
      "Conditional rendering in React allows components to render different UI elements based on conditions. Common approaches include if statements, ternary operators, logical &&, and early returns.",
  },
  {
    id: "6",
    title: "Lists and Keys",
    content:
      "Rendering lists in React is commonly done using the map function. Each list item must have a unique key to help React identify which items have changed, been added, or removed.",
  },
  {
    id: "7",
    title: "React Router Fundamentals",
    content:
      "React Router enables navigation between pages in a single-page application. It supports dynamic routing, nested routes, route parameters, and protected routes.",
  },
  {
    id: "8",
    title: "Nested Routes",
    content:
      "Nested routes allow child components to be rendered inside parent routes. This is useful for layouts, dashboards, and multi-level navigation structures.",
  },
  {
    id: "9",
    title: "Protected Routes",
    content:
      "Protected routes restrict access to certain pages based on authentication or authorization. This is commonly implemented using wrapper components and conditional logic.",
  },
  {
    id: "10",
    title: "404 Not Found Handling",
    content:
      "A 404 page is shown when a user navigates to an undefined route. React Router provides a wildcard route (*) to handle such cases gracefully.",
  },
  {
    id: "11",
    title: "Using useEffect Hook",
    content:
      "The useEffect hook allows developers to perform side effects such as data fetching, subscriptions, and manual DOM updates. It runs after render and can be controlled using dependency arrays.",
  },
  {
    id: "12",
    title: "Context API",
    content:
      "The Context API helps manage global state without prop drilling. It is commonly used for themes, authentication, and user preferences.",
  },
  {
    id: "13",
    title: "Performance Optimization",
    content:
      "React performance can be optimized using memoization techniques like React.memo, useMemo, and useCallback. These help prevent unnecessary re-renders.",
  },
  {
    id: "14",
    title: "Custom Hooks",
    content:
      "Custom hooks allow developers to extract and reuse logic across components. They follow the same rules as built-in hooks and must start with the word 'use'.",
  },
  {
    id: "15",
    title: "React Project Structure",
    content:
      "A well-organized project structure improves scalability and maintainability. Common practices include separating components, hooks, services, and pages into dedicated folders.",
  },
];