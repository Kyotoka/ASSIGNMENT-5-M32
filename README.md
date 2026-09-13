I. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It basically lets us write HTML code inside our JavaScript files. It is used in React because it makes writing UI components way easier and cleaner—you don't have to keep switching between separate HTML and JS files or write complicated DOM methods to render elements.
II. What is the difference between props and state?

  Props: Data passed down from a parent component to a child component. Props are read-only, meaning the child component can't edit or change them.

  State: Data stored inside the component itself that can change (like when a user clicks a button). When state changes, React automatically re-renders that component to update the screen.

III. What does the useState hook do, and where did you use it in this project?

The useState hook lets functional components hold and update their own data. In this project, I used useState in App.jsx to keep track of:

  The list of technologies loaded from JSON (technologies).

  The items added to "Your Stack" (yourStack).

  The loading state while fetching data (loading).

   The mobile menu open/close toggle in the Navbar (isOpen).

IV. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to run side-effects, like fetching data from an external file or API when the component first loads. I needed it here so the app could fetch the technologies.json file from the public folder right when the page mounts on screen.
V. Why does every item in a .map() list need a unique key prop?

React needs a unique key prop so it can keep track of each individual item in a list. This helps React know exactly which item was added, removed, or changed so it only re-renders that specific item instead of rebuilding the whole list every time.
VI. What is conditional rendering? Show one place you used it.

Conditional rendering means showing or hiding certain UI elements based on a condition (like an if/else check or ternary operator).

One place I used it was in the "Your Stack" sidebar: when the stack array length is zero, it renders the "Your stack is empty" message. As soon as items are added to the stack, it hides that empty message and renders the list of selected tech items instead.
VII. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

  Parent to Child: You pass data down directly using props like regular custom attributes on the child component tag.

   Child to Parent: The parent passes down a function through props, and the child calls that function with data as an argument when an event happens (like clicking a button).
