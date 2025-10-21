import { Icon } from "@react95/core";
import React from "react";
import styled from "styled-components";
import { startWebamp } from "../utils/startWebamp";

const StyledShorcut = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  align-items: center;
`;

function Shortcuts({ openExplorer, openMusicExplorer }) {
  return (
    <div>
      <StyledShorcut>
        <Icon
          className="pointer"
          name="windows_explorer"
          onClick={() => openExplorer()}
        />
        <div>Professional</div>
      </StyledShorcut>
      <StyledShorcut>
        <Icon
          className="pointer"
          name="windows_explorer"
          onClick={() => openMusicExplorer()}
        />
        <div>Personal</div>
      </StyledShorcut>
      <StyledShorcut>
        <Icon
          className="pointer"
          name="media_cd"
          onClick={() => startWebamp()}
        />
        <div>My music picks</div>
      </StyledShorcut>
    </div>
  );
}

export default Shortcuts;
