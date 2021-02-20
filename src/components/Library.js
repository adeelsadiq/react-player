import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, currentSong, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? `active-library` : ""}`}>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
