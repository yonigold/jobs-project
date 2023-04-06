import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
