import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
`;
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
  border: 1px solid blue;
  position: absolute;
  border-radius: 50%;
`;
const OvalOne = styled(Oval)`
  background: yellowgreen;
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
  background: lightseagreen;
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
  background: aquamarine;
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
const Heading = styled.div`
  color: cyan;
  font-size: 3em;
  font-weight: normal;
`;
const StyledHeader = styled.span`
  position: relative;
  overflow: hidden;
  display: block;
  line-height: 1.2;
  &&::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: black;
    animation: a-ltr-after 4s cubic-bezier(0.77, 0, 0.18, 1) forwards infinite;
    transform: translateX(-101%);
    @keyframes a-ltr-after {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(101%);
      }
    }
  }
  &&::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
    transform: translateX(0);
    @keyframes a-ltr-before {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(200%);
      }
    }
  }
  &&:nth-of-type(1)::before {
    animation-delay: 1s;
  }
  &&:nth-of-type(1)::after {
    animation-delay: 1s;
  }
  &&:nth-of-type(2)::before {
    animation-delay: 1.5s;
  }
  &&:nth-of-type(2)::after {
    animation-delay: 1.5s;
  }
`;

const Loader = () => {
  return (
    <Outer>
      <FirstLoader>
        <Heading>
          <StyledHeader>LOADING...</StyledHeader>
        </Heading>
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
    </Outer>
  );
};

export default Loader;
