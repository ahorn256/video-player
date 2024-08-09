import { createContext } from "react";

const PlaylistContext = createContext({
  playlist: [],
  setPlaylist: () => {},
  addToPlaylist: () => {},
  deleteFromPlaylist: () => {}
});

export default PlaylistContext;
