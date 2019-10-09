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
const StyledCard = styled.div`
  position: relative;
  cursor: pointer;
  & :hover {
    transform: translateY(0);
  }
`;
const StyledFaceOne = styled.div`
  width: 300px;
  height: 200px;
  transition: 0.5s;
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  z-index: 1;
  transform: translateY(100px);
`;
const StyledFaceTwo = styled.div`
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
  transform: translateY(-100px);
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
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididun
            </p>
            <br />
            <a href="#">Read more</a>
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
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididun
            </p>
            <br />
            <a href="#">Read more</a>
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
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididun
            </p>
            <br />
            <a href="#">Read more</a>
          </StyledContent>
        </StyledFaceTwo>
      </StyledCard>
    </StyledContainer>
  );
};

export default CardComponent;
