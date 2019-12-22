import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import ProfilePage from "./profile-page";

const Container = styled.div`
  background: white;
  width: 100vw;
  min-height: 100vh;
  padding: 0 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Container className="App">
        <Switch>
          <Route path="/profile">
            <ProfilePage name="PROFILE" />
          </Route>
          <Route path="/">
            <ProfilePage name="HOME" />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
