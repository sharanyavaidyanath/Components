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

const Container = styled.div`
  margin: 20px;
  padding: 0;
  background-color: lightseagreen;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  border-radius: 10px;
`;

const ContainerWithHorizontalSpace = styled.div`
  display: grid;
  row-gap: 80px;
`;

const App: React.FC = () => {
  return (
    <div>
      <Container className="App">
        <ContainerWithHorizontalSpace>
          <PriceTierList plans={PLANS_DATA} />
        </ContainerWithHorizontalSpace>
      </Container>
    </div>
  );
};

export default App;
