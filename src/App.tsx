import Navbar from "./components/Navbar"
import Wall from "./components/Wall"
import { useState } from "react";

function App() {

  return (
    <div className="app">
      <Wall />
      <Navbar />
    </div>
  )
}

export default App