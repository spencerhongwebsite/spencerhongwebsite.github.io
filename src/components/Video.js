import { Frame, Modal } from "@react95/core";
import React from "react";
import styled from "styled-components";
import MusicContentFactory from "./NotepadContent/MusicContentFactory";
// import videofile from '../assets/closetoyou.mp4'

import "./video.css";
const FilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Videoo({ closeNotepad, selectedItem, isMobile }) {
  return (
    <Modal
      icon="windows_explorer"
      title="Explorer - spencer's video"
      closeModal={closeNotepad}
      buttons={[{ value: "Close", onClick: closeNotepad }]}
      style={{
        left: isMobile ? "5%" : "15%",
        top: "30%",
        width: isMobile ? "90%" : 600,
        height: 400,
      }}
      menu={[
        { name: "File", list: [] },
        { name: "Edit", list: [] },
        { name: "Help", list: [] },
      ]}
    >
      <Frame bg="white" boxShadow="in" height="100%">
        <FilesWrapper>
          <div className="App">
            <MusicContentFactory id={selectedItem.id} isMobile={isMobile} />
          </div>
        </FilesWrapper>
      </Frame>
    </Modal>
  );
}

export default Videoo;
