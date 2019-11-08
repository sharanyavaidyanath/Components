import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ddd;
`;
const CenterBorder = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  border: 4px solid #ffb9ad;
  border-radius: 36px;
  margin: 40px auto;
  position: relative;
  color: #ffb9ad;
  text-align: center;
  font: 700 30px/120px "Quicksand", sans-serif;
  &&::before {
    display: block;
    width: 120px;
    height: 120px;
    border: 4px solid #ffb9ad;
    border-radius: 36px;
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    transform: rotate(30deg);
  }
  &&::after {
    display: block;
    width: 120px;
    height: 120px;
    border: 4px solid #ffb9ad;
    border-radius: 36px;
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    transform: rotate(60deg);
  }
`;

const ProfilePage = () => {
  return (
    <OuterContainer>
      <CenterBorder></CenterBorder>
    </OuterContainer>
  );
};

export default ProfilePage;
