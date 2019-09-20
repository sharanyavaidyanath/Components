import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  height: 200px;
  width: 200px;
`;

const App: React.FC = () => {
  return <Container className="App"></Container>;
};

export default App;
