import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// const heading = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", { key: "h1" }, "Heading 1"),
//   React.createElement("h2", { key: "h2" }, "Heading 2"),
//   React.createElement("h3", { key: "h3" }, "Heading 3"),
// ]);

//Uisng JSX
// const heading = (
//   <div className="title">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );

//Functional component
const Heading = () => {
  return (
    <div className="title">
      <h1 className="color">Heading 1</h1>
      <h2 className="color">Heading 2</h2>
      <h3 className="color">Heading 3</h3>
      {Heading2()}
    </div>
  );
};

// component composition
const Heading2 = () => <h4>Hello This is heading 2 component</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
