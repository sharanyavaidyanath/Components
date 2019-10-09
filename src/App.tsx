import React from "react";
import "./App.css";
import styled from "styled-components";
import CardComponent from "./card";

const Container = styled.div`
  background-color: red;
  height: 200px;
  width: 200px;
`;

const App: React.FC = () => {
  return (
    <Container className="App">
      <CardComponent />
    </Container>
  );
};

export default App;
