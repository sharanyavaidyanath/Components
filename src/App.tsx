import React from "react";
import "./App.css";
import styled from "styled-components";
import CardComponent from "./card";

const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
`;

const App: React.FC = () => {
  return (
    <Container className="App">
      <CardComponent />
    </Container>
  );
};

export default App;
