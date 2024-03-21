import React from "react";
import "./App.css";
import { WidgetsList } from "./components/WidgetsList";

function App() {
  return (
    <div className="main--container">
        <h3 className="widgets-title">Per product widgets</h3>
      <div className="widgets--container">
        <WidgetsList />
      </div>
    </div>
  );
}

export default App;
