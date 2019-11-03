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
import Loader from "./loader";

const Container = styled.div`
  background-image: url("/images/CN.jpg");
  background: black;
  width: 100vw;
  height: 100vh;
  padding: 0;
  display: flex;
  justify-content: space-around;
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
      <Loader />
    </Container>
  );
};

export default App;
