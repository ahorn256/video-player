import { useState } from "react";
import PlaylistContext from "./PlaylistContext";

function PlaylistProvider({children}) {
  const [ playlist, setPlaylist ] = useState([]);

  function addToPlaylist(title, url, id) {
    const newPlaylist = [...playlist, { title, url, id}];
    setPlaylist(newPlaylist);
  }

  function deleteFromPlaylist(id) {
    const newPlaylist = playlist.filter(item => item.id !== id);
    setPlaylist(newPlaylist);
  }

  return (
    <PlaylistContext.Provider value={[playlist, addToPlaylist, deleteFromPlaylist]}>
      {children}
    </PlaylistContext.Provider>
  );
}

export default PlaylistProvider;
