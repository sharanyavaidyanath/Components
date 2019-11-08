import React from "react";
import "./App.css";
import styled from "styled-components";
import ProfilePage from "./profile-page";

const Container = styled.div`
  background-image: url("/images/CN.jpg");
  background: white;
  width: 100vw;
  height: 100vh;
  padding: 0;
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
      <ProfilePage />
    </Container>
  );
};

export default App;
