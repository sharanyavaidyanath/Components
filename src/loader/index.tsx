import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 200px;
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
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);

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
    background: white;
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
const ThirdLoader = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
`;
const BaseSquare = styled.div`
  position: absolute;
  width: 80px;
  height: 81px;
  margin: 20px;
  border-radius: 5%;
  transform: rotate(45deg);
  mix-blend-mode: multiply;
  animation: 2s cubic-bezier(0.66, -0.7, 0.27, 1.6) infinite;
  border: 1px solid #000;
`;
const SquareOne = styled(BaseSquare)`
  background-color: aqua;
  animation-name: rotateOne;
  @keyframes rotateOne {
    to {
      transform: rotate(-135deg);
    }
  }
`;
const SquareTwo = styled(BaseSquare)`
  background: yellow;
  animation-name: rotateTwo;
  @keyframes rotateTwo {
    to {
      transform: rotate(225deg);
    }
  }
`;
const SquareThree = styled(BaseSquare)`
  background: pink;
  animation-name: rotateThree;
  @keyframes rotateThree {
    to {
      transform: rotate(-315deg);
    }
  }
`;
const StyledHeading = styled.h1`
  color: teal;
  font-family: monospace;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 4s steps(30, end) infinite,
    blink-caret 0.5s step-end infinite;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
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
      <ThirdLoader>
        <StyledHeading>LOADING</StyledHeading>
        <SquareOne></SquareOne>
        <SquareTwo></SquareTwo>
        <SquareThree></SquareThree>
      </ThirdLoader>
    </Outer>
  );
};

export default Loader;
