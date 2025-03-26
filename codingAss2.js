import React from "react";
import ReactDOM from "react-dom/client";

//Create a Header Component from scratch using Functional Components with JSX;

const Header = () => {
  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="logo">🍔 FoodApp</div>

      {/* Search bar in the middle */}
      <input type="text" className="search-bar" placeholder="Search food..." />

      {/* User icon on the right */}
      <div className="user-icon">🧌</div>
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <p>Welcome to FoodApp!</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
