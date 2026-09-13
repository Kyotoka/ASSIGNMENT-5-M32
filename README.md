## 💡 React Concept Questions & Answers

### I. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension that lets you write HTML directly inside JavaScript. It is used in React to make UI component code clean, readable, and easy to maintain by putting component logic and layout in one place.

### II. What is the difference between props and state?
* **Props**: Read-only data passed from a parent component down to a child component. A component cannot change its own props.
* **State**: Internal data created and managed inside a component that can change over time. Updating state triggers a component re-render.

### III. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook adds local state tracking to functional components. In this project, it was used in `App.jsx` to store technology card data, manage selected stack items, and track loading states.

### IV. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook runs side-effects like fetching data after a component mounts. It was needed to fetch technology data asynchronously from `public/technologies.json` once when the page loads.

### V. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify which items in a list changed, were added, or removed. This ensures accurate updates and optimizes re-rendering performance.

### VI. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements based on specific conditions. 
**Example (`App.jsx`)**: Displaying a loading spinner while data fetches, then rendering the card grid once loaded:

```jsx
{isLoading ? (
  <div className="animate-spin ..."></div>
) : (
  <div className="grid grid-cols-3 ...">
    {technologies.map((tech) => <TechCard key="{tech.id}" tech="{tech}"/>)}
  </div>
)}

VII. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

    Parent to Child: Passed directly via attributes called props (e.g., <TechCard tech={item} />).

    Child to Parent: The parent passes down a function via props, and the child calls that function with data as an argument when an event happens (e.g., onClick={() => onAdd(tech)}).