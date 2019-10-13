import React from "react";
import styled from "styled-components";
import designImage from "../images/design.jpeg";
import codeImage from "../images/code.jpg";
import launchImage from "../images/launch.jpeg";

const StyledContainer = styled.div`
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const StyledFaceOne = styled.div`
  grid-area: 1/-1/1/-1;
  width: 300px;
  height: 200px;
  transition: 0.5s;
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  z-index: 1;
  transform: translateY(0px);
`;

const StyledCard = styled.div`
  position: relative;
  cursor: pointer;
  display: grid;
  &:hover ${StyledFaceOne} {
    transform: translateY(-200px);
  }
`;

const StyledFaceTwo = styled.div`
  grid-area: 1/-1/1/-1;
  width: 300px;
  height: 200px;
  transition: 0.5s;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
`;
const StyledImage = styled.img`
  height: 150px;
  width: 200px;
`;
const StyledContent = styled.div`
  opacity: 0.2s;
  transition: 0.5s;
`;
const StyledHeader = styled.h3`
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
`;
const StyledText = styled.p`
  margin: 0;
  padding: 0;
`;

const StyledAnchor = styled.a`
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
  &:hover {
    background: #333;
    color: #fff;
  }
`;

const CardComponent = () => {
  return (
    <StyledContainer>
      <StyledCard>
        <StyledFaceOne className="face face1">
          <StyledContent>
            <StyledImage src={designImage}></StyledImage>
            <StyledHeader>Design</StyledHeader>
          </StyledContent>
        </StyledFaceOne>
        <StyledFaceTwo className="face face2">
          <StyledContent>
            <StyledText>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididun
            </StyledText>
            <br />
            <StyledAnchor href="#">Read more</StyledAnchor>
          </StyledContent>
        </StyledFaceTwo>
      </StyledCard>
      <StyledCard>
        <StyledFaceOne className="face face1">
          <StyledContent>
            <StyledImage src={codeImage}></StyledImage>
            <StyledHeader>Code</StyledHeader>
          </StyledContent>
        </StyledFaceOne>
        <StyledFaceTwo className="face face2">
          <StyledContent>
            <StyledText>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididun
            </StyledText>
            <br />
            <StyledAnchor href="#">Read more</StyledAnchor>
          </StyledContent>
        </StyledFaceTwo>
      </StyledCard>
      <StyledCard>
        <StyledFaceOne className="face face1">
          <StyledContent>
            <StyledImage src={launchImage}></StyledImage>
            <StyledHeader>Launch</StyledHeader>
          </StyledContent>
        </StyledFaceOne>
        <StyledFaceTwo className="face face2">
          <StyledContent>
            <StyledText>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididun
            </StyledText>
            <br />
            <StyledAnchor href="#">Read more</StyledAnchor>
          </StyledContent>
        </StyledFaceTwo>
      </StyledCard>
    </StyledContainer>
  );
};

export default CardComponent;
