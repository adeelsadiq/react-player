import React from "react";
//importing styling
import "./styles/App.scss";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";

//main app function
function App() {
  return (
    <div className="App">
      <Song />
      <Player />
      ''
    </div>
  );
}

export default App;
