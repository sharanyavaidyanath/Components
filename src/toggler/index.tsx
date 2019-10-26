import React from "react";
import styled from "styled-components";
import { StyledComponentProps } from "../utils/types";
export interface TogglerProps {
  options: string[];
  onOptionChange: (option: string) => void;
}

interface OptionProps {
  highlight: boolean;
}
// #region styled-components

const Container = styled.div`
  background-color: rgb(237, 237, 237);
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
`;

const Option = styled.div<OptionProps>`
  padding: 5px;
  border-radius: 4px;
  color: ${props => (props.highlight ? "rgb(82, 82, 82)" : "grey")};
  ${props =>
    props.highlight
      ? `background-color: rgb(246, 246, 246);
    box-shadow: rgba(128, 128, 128, 0.2) 0px 0px 3px 0px;`
      : ""}
  cursor: pointer;
  transition: all 100ms linear 0s;
  &:first-of-type {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

// #endregion

const Toggler = ({
  options,
  className,
  onOptionChange,
}: TogglerProps & StyledComponentProps) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const toggleOption = (option: string) => () => {
    setSelectedOption(option);
    onOptionChange(option);
  };

  return (
    <Container className={className}>
      {options.map(option => (
        <Option
          key={option}
          highlight={selectedOption === option}
          onClick={toggleOption(option)}
        >
          {option}
        </Option>
      ))}
    </Container>
  );
};

export default Toggler;
