import { useState } from "react";
import SelectedMediaContext from "./SelectedMediaContext";

function SelectedMediaProvider({children}) {
  const [ selectedMedia, setSelectedMedia ] = useState(0);

  return (
    <SelectedMediaContext.Provider value={[ selectedMedia, setSelectedMedia ]}>
      {children}
    </SelectedMediaContext.Provider>
  );
}

export default SelectedMediaProvider;
