import React from "react";
import ReactDOM from "react-dom";
import Wheather from "./components/wheather";

function App() {
  console.log("kabaki");
  return <Wheather />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
