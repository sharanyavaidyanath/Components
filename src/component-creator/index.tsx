import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #333;
`;

const Heading = styled.h1<{ color: string }>`
  color: ${props => props.color};
`;

const ComponentCreator = () => {
  const [color, setColor] = React.useState("#fff");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };
  return (
    <OuterContainer>
      <Heading color={color}>Testing</Heading>
      <input type="color" value={color} onChange={onChange} />
    </OuterContainer>
  );
};

export default ComponentCreator;
