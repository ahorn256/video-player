import AddUrl from './AddUrl';
import './App.css';
import Player from './Player';
import Playlist from './Playlist';
import PlaylistProvider from './PlaylistProvider';
import SelectedMediaProvider from './SelectedMediaProvider';

function App() {
  return (
    <div className="App">
      <PlaylistProvider>
        <SelectedMediaProvider>
          <AddUrl />
          <Playlist />
          <Player />
        </SelectedMediaProvider>
      </PlaylistProvider>
    </div>
  );
}

export default App;
