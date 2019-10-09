import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 1000px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const StyledCard = styled.div``;
const StyledContent = styled.div``;

const CardComponent = () => {
  return (
    <StyledContainer>
      <StyledCard>
        <div className="face face1">
          {" "}
          <StyledContent>
            <img src="https://picsum.photos/200/300"></img>
            <h3>Design</h3>
          </StyledContent>
        </div>
        <div className="face face2">
          {" "}
          <StyledContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#">Read more</a>
          </StyledContent>
        </div>
      </StyledCard>
      <StyledCard>
        <div className="face face1">
          {" "}
          <StyledContent>
            <img src="https://picsum.photos/200/300"></img>
            <h3>Code</h3>
          </StyledContent>
        </div>
        <div className="face face2">
          {" "}
          <StyledContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#">Read more</a>
          </StyledContent>
        </div>
      </StyledCard>
      <StyledCard>
        <div className="face face1">
          {" "}
          <StyledContent>
            <img src="https://picsum.photos/200/300"></img>
            <h3>Launch</h3>
          </StyledContent>
        </div>
        <div className="face face2">
          {" "}
          <StyledContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#">Read more</a>
          </StyledContent>
        </div>
      </StyledCard>
    </StyledContainer>
  );
};

export default CardComponent;
