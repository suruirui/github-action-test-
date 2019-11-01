import React from "react";
import "./App.css";
import Button from "./components/Button";
import MarkUpGallery from "./components/MarkUpGallery";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button msg="Action now"></Button>
        {/* <Button msg="Rock now"></Button>  */}
        <MarkUpGallery></MarkUpGallery>
        <p>Test successfully~!</p>
      </header>
    </div>
  );
}

export default App;
