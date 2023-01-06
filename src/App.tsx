import React from "react";
import { init } from "@noriginmedia/norigin-spatial-navigation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/pages/Home";

init({
  debug: true,
  visualDebug: false,
});

function App() {
  return (
    <React.StrictMode>
      <Homepage />
    </React.StrictMode>
  );
}

export default App;
