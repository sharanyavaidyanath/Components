import React from "react";
import styled from "styled-components";
import profileLogo from "../images/SVS.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import linkedIn from "../images/linkedin.png";

const OuterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #333;
  overflow: hidden;
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
  animation: rotateOne 4s;
  @keyframes rotateOne {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

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

const StyledImg = styled.img`
  width: 80%;
  margin-top: 30px;
`;

const StyledLinkOne = styled.a`
  &&:hover {
    cursor: pointer;
  }
`;
const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: auto;
`;
const Name = styled.div`
  text-align: center;
  position: relative;
  top: 45%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 320px;
  &&:hover .shape {
    stroke-width: 2px;
    stroke-dashoffset: 0;
    stroke-dasharray: 760;
  }
`;

const Rect = styled.rect`
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  fill: transparent;
  stroke: #dfcdc3;
  border-bottom: 5px solid black;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
`;

const Text = styled.div`
  font-family: "Roboto Condensed";
  position: relative;
  top: 45px;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 8px;
  color: #719192;
`;
const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 45px);
  margin-left: 45%;
  margin-top: 180px;
  grid-column-gap: 10px;
`;
const Twitter = styled.img`
  height: 25px;
`;
const Facebook = styled.img`
  height: 25px;
`;
const LinkedIn = styled.img`
  height: 25px;
`;
const TwitterLink = styled.a`
  cursor: pointer;
`;
const FacebookLink = styled.a`
  cursor: pointer;
`;
const LinkedInLink = styled.a`
  cursor: pointer;
`;

const ProfilePage = () => {
  return (
    <OuterContainer>
      <Name>
        <Text className="text">SHARANYA</Text>
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <Rect className="shape" height="60" width="320" />
        </svg>
      </Name>
      <LogoContainer>
        <CenterBorder>
          <StyledLinkOne>
            <StyledImg src={profileLogo}></StyledImg>
          </StyledLinkOne>
        </CenterBorder>
      </LogoContainer>
      <SocialMedia>
        <TwitterLink href="https://twitter.com" target="_blank">
          <Twitter src={twitter}></Twitter>
        </TwitterLink>
        <FacebookLink href="https://facebook.com" target="_blank">
          <Facebook src={facebook}></Facebook>
        </FacebookLink>
        <LinkedInLink href="https://linkedin.com" target="_blank">
          <LinkedIn src={linkedIn}></LinkedIn>
        </LinkedInLink>
      </SocialMedia>
    </OuterContainer>
  );
};

export default ProfilePage;
