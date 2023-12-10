import React, { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/dataContext";
// import musicdata from "../services/musicDataService";
import Explorer from "./Explorer";
import MusicExplorer from "./MusicExplorer";
import Notepad from "./Notepad";
import Player from "./Player";
import Shortcuts from "./Shortcuts";
import Videoo from "./Video";
// import Life from './Life';

function Desktop() {
  const isMobile = window.innerWidth < 850;

  const data = useContext(DataContext);
  const [explorerOpened, toggleExplorer] = useState(false);
  // music
  const [musicExplorerOpened, toggleMusicExplorer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMusicItem, setSelectedMusicItem] = useState(null);
  //music
  const [musicpadOpened, toggleMusicpad] = useState(false);
  const [notepadOpened, toggleNotepad] = useState(false);
  const [items, setItems] = useState([]);
  const [musicItems, setMusicItems] = useState([]);

  useEffect(() => {
    const files = data.getItems();
    const musicfiles = data.getMusicItems();
    setItems(files);
    setMusicItems(musicfiles);

    setSelectedItem(files[0]);
    setSelectedMusicItem(musicfiles[0]);
    toggleNotepad(!isMobile);
    toggleMusicpad(!isMobile);
  }, [data, isMobile]);

  const closeExplorer = () => {
    toggleExplorer(false);
  };

  const openExplorer = () => {
    toggleExplorer(true);
  };

  const closeNotepad = () => {
    toggleNotepad(false);
  };

  const openNotepad = (item) => {
    setSelectedItem(item);
    toggleNotepad(true);
  };

  const closeMusicExplorer = () => {
    toggleMusicExplorer(false);
  };

  const openMusicExplorer = () => {
    toggleMusicExplorer(true);
  };

  const closeMusicpad = () => {
    toggleMusicpad(false);
  };

  const openMusicpad = (item) => {
    setSelectedMusicItem(item);
    toggleMusicpad(true);
  };

  return (
    <React.Fragment>
      <Shortcuts
        openExplorer={openExplorer}
        openMusicExplorer={openMusicExplorer}
      />
      {explorerOpened && (
        <Explorer
          items={items}
          closeExplorer={closeExplorer}
          openNotepad={openNotepad}
          isMobile={isMobile}
        />
      )}
      {notepadOpened && (
        <Notepad
          closeNotepad={closeNotepad}
          selectedItem={selectedItem}
          isMobile={isMobile}
        />
      )}

      {musicExplorerOpened && (
        <MusicExplorer
          items={musicItems}
          closeExplorer={closeMusicExplorer}
          openNotepad={openMusicpad}
          isMobile={isMobile}
        />
      )}
      {musicpadOpened && (
        <Videoo
          closeNotepad={closeMusicpad}
          selectedItem={selectedMusicItem}
          isMobile={isMobile}
        />
      )}
      <Player />
    </React.Fragment>
  );
}

export default Desktop;
