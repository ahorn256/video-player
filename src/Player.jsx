import { useContext, useEffect, useState } from "react";
import SelectedMediaContext from './SelectedMediaContext';
import PlaylistContext from './PlaylistContext';

function Player() {
  const [ selectedMedia ] = useContext(SelectedMediaContext);
  const [ playlist ] = useContext(PlaylistContext);
  const [ src, setSrc ] = useState('');

  useEffect(() => {
    const currentMedia = playlist.find(item => item.id === selectedMedia);
    setSrc(currentMedia ? currentMedia.url : '');  
  }, [playlist, selectedMedia]);

  return (
    <div className='player'>
      <video controls src={src}></video>
      <div className="player-control">
        <button>Play</button>
        <button>Stop</button>
        <span className="volume-control">
          <input type='range' />
          <span>100</span>
        </span>
        <span className="seek-control">
          <input type='range' />
          <span>100/100</span>
        </span>
      </div>
    </div>
  );
}

export default Player;
