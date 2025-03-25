import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches the JS) - PARCEL - Babel

//JSX => Babel => transpiles it to React.createEelemt-JS Object => HTMLElement(render)

const headingJSX = <h1 className="heading">Namaste React from JSX🚀</h1>;

console.log(headingJSX);

//React Element
const elem = (
  <div>
    <h1>This is the React Element</h1>
    {/* get reference error
    <Heading /> */}
  </div>
);

//Functionl Components

//Component 1
const Heading = () => (
  <div>
    <h2>This is the component inside another component</h2>
  </div>
);

//Component 2
const HeadingComponent = () => (
  <div id="container">
    {/* EVERY JS code that we can execute inside these braces */}
    {1000 + 2}
    {elem}
    <Heading />
    {Heading()}
    <h1>This is the functional component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
