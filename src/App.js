import React, { useState } from "react";
//importing styling
import "./styles/App.scss";
//importing data
import data from "./util";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//main app function
function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
