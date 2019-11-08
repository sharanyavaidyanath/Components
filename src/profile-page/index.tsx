import React from "react";
import styled from "styled-components";
import profileLogo from "../images/SVS.png";
import { href } from "../utils/constants";

const OuterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #333;
`;
const CenterBorder = styled.div`
  display: block;
  width: 120px;
  height: 120px;
  border: 4px solid darkgrey;
  border-radius: 36px;
  margin: 340px auto;
  position: relative;
  color: #333;
  text-align: center;
  font: 700 30px/120px "Quicksand", sans-serif;
  &&::before {
    display: block;
    width: 120px;
    height: 120px;
    border: 4px solid gray;
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
    border: 4px solid lightgray;
    border-radius: 36px;
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    transform: rotate(60deg);
  }
`;

const StyledSvg = styled.svg`
  width: 80%;
`;
const ProfilePage = () => {
  return (
    <OuterContainer>
      <CenterBorder>
        <StyledSvg
          width="546px"
          height="281px"
          viewBox="0 0 546 281"
          version="1.1"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <image
              id="Bitmap"
              x="0"
              y="0"
              width="546"
              height="281"
              href={href}
            ></image>
          </g>
        </StyledSvg>
      </CenterBorder>
    </OuterContainer>
  );
};

export default ProfilePage;
