import React from "react";
import styled from "styled-components";

interface DarkContainerProps {
  children: React.ReactNode;
}

// #region styled-components

const Container = styled.div`
  position: relative;
  color: white;
`;

const StyledDarkContainer = styled.div`
  display: grid;
  width: 100%;
  background: radial-gradient(circle at 10% 20%, rgb(26, 20, 74) 0%, rgb(59, 52, 120) 100.2%);
  padding-top: 80px;
  padding-bottom: 60px;
  align-items: center;
  justify-items: center;
  row-gap: 30px;
`;

const StyledWave = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: -7px;
  width: 100vw;
  transform: rotate(180deg);
`;
// #endregion

const DarkContainer = ({ children }: DarkContainerProps) => {
  return (
    <Container>
      <StyledDarkContainer>{children}</StyledDarkContainer>
      <StyledWave>
        <svg viewBox="0 0 1695 57" preserveAspectRatio="none">
          <path
            d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
      </StyledWave>
    </Container>
  );
};

export default DarkContainer;
