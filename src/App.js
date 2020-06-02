import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Home />
    </div>
  );
}

export default App;
