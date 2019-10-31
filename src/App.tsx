import React from "react";
import "./App.css";
import styled from "styled-components";
import CardComponent from "./card";
import FlipCard from "./flipcard";
import TorchEffect from "./torcheffect";
import VideoHighlight from "./video-highlight";
import { VIDEO_HIGHLIGHT_LIST } from "./utils/constants";
import PriceTierList from "./price-tiers";
import { PLANS_DATA } from "../src/utils/constants";
import DarkContainer from "./wave-dark-container";

const Container = styled.div`
  margin: 20px;
  padding: 0;
  /* background-color: lightseagreen; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  background-image: url("../images/CN.jpg");
  background-repeat: repeat;
`;

const ContainerWithHorizontalSpace = styled.div`
  display: grid;
  row-gap: 80px;
`;

const App: React.FC = () => {
  return (
    <Container className="App">
      <DarkContainer>
        <ContainerWithHorizontalSpace>
          {VIDEO_HIGHLIGHT_LIST.map((element, index) => (
            <VideoHighlight
              {...element}
              key={index}
              videoOnLeft={index % 2 === 1}
            />
          ))}
        </ContainerWithHorizontalSpace>
      </DarkContainer>{" "}
    </Container>
  );
};

export default App;
