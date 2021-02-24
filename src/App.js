import React, { Fragment } from "react";
import Calculator from "./components/Calculator";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <h1 className="app-h1">#Sneaky Calculator@</h1>
      <Calculator />
    </Fragment>
  );
};

export default App;
