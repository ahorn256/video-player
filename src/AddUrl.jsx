import { useContext, useState } from "react";
import PlaylistContext from "./PlaylistContext";
import SelectedMediaContext from "./SelectedMediaContext";

function AddUrl() {
  const [ counter, setCounter ] = useState(1);
  const [ title, setTitle ] = useState('');
  const [ url, setUrl ] = useState('');
  const [ , addToPlaylist ] = useContext(PlaylistContext);
  const [ , setSelectedMedia ] = useContext(SelectedMediaContext);

  function addMedia() {
    const newCounter = counter + 1;

    addToPlaylist(title, url, newCounter);

    setCounter(newCounter);
    setSelectedMedia(newCounter);
  }

  return (
    <div>
      <label>
        <span> Titel: </span>
        <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
      </label>
      <label>
        <span> URL: </span>
        <input type='text' value={url} onChange={e => setUrl(e.target.value)}/>
      </label>
      <button onClick={addMedia}>Add</button>
    </div>
  );
}

export default AddUrl;
