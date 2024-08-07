import { useContext } from "react";
import PlaylistContext from "./PlaylistContext";
import SelectedMediaContext from "./SelectedMediaContext";

function Playlist() {
  const [ playlist, , deleteFromPlaylist ] = useContext(PlaylistContext);
  const [ selectedMedia, setSelectedMedia ] = useContext(SelectedMediaContext);

  function deleteMedia() {
    const item = playlist.find(item => item.id === selectedMedia);
    const i = item ? playlist.indexOf(item) : -1;

    if(i > -1 && i + 1 < playlist.length) {
      setSelectedMedia(playlist[i + 1].id);
    } else if(i > -1 && i - 1 > -1) {
      setSelectedMedia(playlist[i - 1].id);
    } else {
      setSelectedMedia(0);
    }

    deleteFromPlaylist(selectedMedia);
  }

  return (
    <>
      <div>
        <select className='playlist' size='10' value={selectedMedia} onChange={(e) => setSelectedMedia(parseInt(e.target.value))}>
          { playlist.map(item => (
            <option key={item.id} value={item.id}>{item.title}</option>
          )) }
        </select>
      </div>
      <div className='playlist-control'>
        <div className='playlist-prev-next'>
          <button>⇤</button>
          <button>⇥</button>
        </div>
        <button onClick={deleteMedia}>Delete</button>
      </div>
    </>
  );
}

export default Playlist;
