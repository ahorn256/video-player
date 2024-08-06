import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <label>
          <span> Titel: </span>
          <input type='text' />
        </label>
        <label>
          <span> URL: </span>
          <input type='text' />
        </label>
        <button>Add</button>
      </div>
      <div>
        <select className='playlist' size='10'>
        </select>
      </div>
      <div className='playlist-control'>
        <div className='playlist-prev-next'>
          <button>⇤</button>
          <button>⇥</button>
        </div>
        <button>Delete</button>
      </div>
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
    </div>
  );
}

export default App;
