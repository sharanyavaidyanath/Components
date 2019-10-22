import React from "react";
import "./App.css";
import styled from "styled-components";
import CardComponent from "./card";
import FlipCard from "./flipcard";
import TorchEffect from "./torcheffect";
import VideoHighlight from "./video-highlight";
import { VIDEO_HIGHLIGHT_LIST } from "./utils/constants";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
`;

const ContainerWithHorizontalSpace = styled.div`
  display: grid;
  row-gap: 80px;
`;

const App: React.FC = () => {
  return (
    <Container className="App">
      <ContainerWithHorizontalSpace>
        {VIDEO_HIGHLIGHT_LIST.map((element, index) => (
          <VideoHighlight
            {...element}
            key={index}
            videoOnLeft={index % 2 === 1}
          />
        ))}
      </ContainerWithHorizontalSpace>
    </Container>
  );
};

export default App;
