import React from "react";
import styled from "styled-components";
import front from "../images/front.jpeg";
import back from "../images/back.jpeg";

const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledFlipCardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 10px 50px grey;
`;

const StyledFlipCard = styled.div`
  width: 270px;
  height: 320px;
  perspective: 1000px;
  cursor: pointer;
  &:hover ${StyledFlipCardContent} {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  background: green;
`;
const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  background: yellow;
  transform: rotateY(180deg);
`;

const FlipCard = () => {
  return (
    <CardContainer>
      <StyledFlipCard className="flip-card">
        <StyledFlipCardContent className="flip-card-inner">
          <Front className="front">
            <img src={front}></img>
          </Front>
          <Back className="back">
            <img src={back}></img>
          </Back>
        </StyledFlipCardContent>
      </StyledFlipCard>
    </CardContainer>
  );
};

export default FlipCard;
