import { useContext } from "react";
import PlaylistContext from "./PlaylistContext";
import SelectedMediaContext from "./SelectedMediaContext";

function Playlist() {
  const [ playlist, , deleteFromPlaylist ] = useContext(PlaylistContext);
  const [ selectedMedia, setSelectedMedia ] = useContext(SelectedMediaContext);

  function deleteMedia() {
    const currentMedia = playlist.find(item => item.id === selectedMedia);
    const currentMediaPos = currentMedia ? playlist.indexOf(currentMedia) : -1;

    if(currentMediaPos > -1 && currentMediaPos + 1 < playlist.length) {
      setSelectedMedia(playlist[currentMediaPos + 1].id);
    } else if(currentMediaPos > -1 && currentMediaPos - 1 > -1) {
      setSelectedMedia(playlist[currentMediaPos - 1].id);
    } else {
      setSelectedMedia(0);
    }

    deleteFromPlaylist(selectedMedia);
  }

  function selectMedia(direction) {
    const currentMedia = playlist.find(item => item.id === selectedMedia);
    const currentMediaPos = currentMedia ? playlist.indexOf(currentMedia) : -1;

    if(currentMediaPos < 0) return;

    if(direction > 0 && currentMediaPos + 1 < playlist.length) {
      setSelectedMedia(playlist[currentMediaPos + 1].id);
    } else if(direction < 0 && currentMediaPos - 1 > -1) {
      setSelectedMedia(playlist[currentMediaPos - 1].id);
    }
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
          <button onClick={() => selectMedia(-1)}>⇤</button>
          <button onClick={() => selectMedia(1)}>⇥</button>
        </div>
        <button onClick={deleteMedia}>Delete</button>
      </div>
    </>
  );
}

export default Playlist;
