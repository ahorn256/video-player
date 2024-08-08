import { useContext, useEffect, useRef, useState } from "react";
import SelectedMediaContext from './SelectedMediaContext';
import PlaylistContext from './PlaylistContext';

function Player() {
  const [ selectedMedia ] = useContext(SelectedMediaContext);
  const [ playlist ] = useContext(PlaylistContext);
  const [ src, setSrc ] = useState(null);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    const currentMedia = playlist.find(item => item.id === selectedMedia);
    setSrc(currentMedia ? currentMedia.url : null);
  }, [playlist, selectedMedia]);

  function setPlaying(playing) {
    if(playing) {
      videoRef.current.autoplay = true;
      setIsPlaying(true);
    } else {
      videoRef.current.autoplay = false;
      setIsPlaying(false);
    }
  }

  function handlePlayPause() {
    if(isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  function handleStop() {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }

  return (
    <div className='player'>
      <video
        ref={videoRef}
        controls
        src={src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}></video>
      <div className="player-control">
        <button onClick={handlePlayPause}>Play</button>
        <button onClick={handleStop}>Stop</button>
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
