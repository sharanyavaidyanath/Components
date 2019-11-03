import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 112px;
  height: 112px;
`;
const BaseBox = styled.div`
  border: 5px solid aquamarine;
  border-radius: 20px;
  box-sizing: border-box;
  position: absolute;
  display: block;
  width: 112px;
  height: 48px;
  margin-top: 64px;
  margin-left: 0px;
  animation-duration: 4s;
  animation-delay: 0s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;

const Box1 = styled(BaseBox)`
  border: 5px solid teal;
  animation-name: anime1;
  @keyframes anime1 {
    0% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    12% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    25% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    37% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    62% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
    75% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 0px;
    }
    87% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
  }
`;
const Box2 = styled(BaseBox)`
  border: 5px solid yellowgreen;
  animation-name: anime2;
  @keyframes anime2 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    12% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    25% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    37% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    50% {
      width: 112px;
      height: 48px;
      margin-top: 0px;
      margin-left: 0px;
    }
    62% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    75% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    87% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    100% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
  }
`;
const Box3 = styled(BaseBox)`
  animation-name: anime3;
  @keyframes anime3 {
    0% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    12% {
      width: 48px;
      height: 48px;
      margin-top: 0px;
      margin-left: 64px;
    }
    25% {
      width: 48px;
      height: 112px;
      margin-top: 0px;
      margin-left: 64px;
    }
    37% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    50% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    62% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    75% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    87% {
      width: 48px;
      height: 48px;
      margin-top: 64px;
      margin-left: 64px;
    }
    100% {
      width: 112px;
      height: 48px;
      margin-top: 64px;
      margin-left: 0px;
    }
  }
`;
const Text = styled.h2`
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
`;
const SecondLoader = styled.div``;
const FirstLoader = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`;
const Oval = styled.span`
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  position: absolute;
  border-radius: 50%;
  background: #fff;
`;
const OvalOne = styled(Oval)`
  top: 50px;
  left: 90px;
  animation: OvalOneAni 2.5s ease infinite;
  @keyframes OvalOneAni {
    0%,
    100% {
      top: 50px;
      left: 90px;
    }
    35% {
      top: 120px;
      left: 138px;
    }
    70% {
      top: 120px;
      left: 40px;
    }
  }
`;
const OvalTwo = styled(Oval)`
  top: 120px;
  left: 40px;
  animation: OvalTwoAni 2.5s ease infinite;
  @keyframes OvalTwoAni {
    0%,
    100% {
      top: 120px;
      left: 40px;
    }
    35% {
      top: 50px;
      left: 90px;
    }
    70% {
      top: 120px;
      left: 138px;
    }
  }
`;
const OvalThree = styled(Oval)`
  top: 120px;
  left: 138px;
  animation: OvalThreeAni 2.5s ease infinite;
  @keyframes OvalThreeAni {
    0%,
    100% {
      top: 120px;
      left: 138px;
    }
    35% {
      top: 120px;
      left: 40px;
    }
    70% {
      top: 50px;
      left: 90px;
    }
  }
`;

const Loader = () => {
  return (
    <div>
      <FirstLoader>
        <OvalOne></OvalOne>
        <OvalTwo> </OvalTwo>
        <OvalThree></OvalThree>
      </FirstLoader>
      <SecondLoader>
        <Text>LOADING...</Text>
        <Container>
          <Box1></Box1>
          <Box2></Box2>
          <Box3></Box3>
        </Container>
      </SecondLoader>
    </div>
  );
};

export default Loader;
