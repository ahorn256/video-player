function Player() {
  return (
    <div className='player'>
      <video controls src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'></video>
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
