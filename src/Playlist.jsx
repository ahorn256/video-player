import { useContext, useEffect } from "react";
import PlaylistContext from "./PlaylistContext";
import SelectedMediaContext from "./SelectedMediaContext";

const defaultPlaylist = [
  {
    id: "1",
    title: "ElephantsDream",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: "2",
    title: "BigBuckBunny",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: "3",
    title: "Sintel",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  }
];

function Playlist() {
  const [ playlist, setPlaylist, , deleteFromPlaylist ] = useContext(PlaylistContext);
  const [ selectedMedia, setSelectedMedia ] = useContext(SelectedMediaContext);

  useEffect(() => {
    setPlaylist(defaultPlaylist);
    setSelectedMedia(defaultPlaylist[0].id);
  }, [setPlaylist, setSelectedMedia]);

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
        <select className='playlist' size='10' value={selectedMedia} onChange={(e) => setSelectedMedia(e.target.value)}>
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
