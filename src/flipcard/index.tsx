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
  background: burlywood;
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
  background: burlywood;
  transform: rotateY(180deg);
`;

const StyledImage = styled.img`
  height: 200px;
  width: 150px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 1px #333;
`;
const FlipCard = () => {
  return (
    <CardContainer>
      <StyledFlipCard className="flip-card">
        <StyledFlipCardContent className="flip-card-inner">
          <Front className="front">
            <StyledImage src={front}></StyledImage>
            <p>FRONT</p>
          </Front>
          <Back className="back">
            <StyledImage src={back}></StyledImage>
            <p>BACK</p>
          </Back>
        </StyledFlipCardContent>
      </StyledFlipCard>
    </CardContainer>
  );
};

export default FlipCard;
