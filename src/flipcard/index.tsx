import React from "react";
import styled from "styled-components";

const StyledFlipCard = styled.div`
  width: 270px;
  height: 320px;
  perspective: 1000px;
  cursor: pointer;
`;
const StyledFlipCardContent = styled.div``;
const Front = styled.div``;
const Back = styled.div``;

const FlipCard = () => {
  return (
    <StyledFlipCard className="flip-card">
      <StyledFlipCardContent className="flip-card-inner">
        <Front className="front">Front</Front>
        <Back className="back">Back</Back>
      </StyledFlipCardContent>
    </StyledFlipCard>
  );
};

export default FlipCard;
