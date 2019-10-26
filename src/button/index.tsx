import React from "react";
import styled from "styled-components";
import { FONT_SIZES } from "../utils/constants";

interface StyledButtonProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  link?: boolean;
}

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {
  text: string;
}

// #region styled-components
const chooseButtonBackGroundColor = (props: StyledButtonProps) => {
  const { secondary, success, danger, link } = props;
  let color = "#007bff";
  if (secondary) {
    color = "gray";
  } else if (success) {
    color = "green";
  } else if (danger) {
    color = "red";
  } else if (link) {
    color = "transparent";
  }
  return color;
};

const StyledButton = styled.button`
    background-color: rgba(255, 255, 255, 0.15);

  /* background-color: ${chooseButtonBackGroundColor}; */
  padding: 30px;
  border: none;
  border-radius: 4px;
  font-size: ${FONT_SIZES.BIG};
  font-weight: 600;
  color: ${(props: StyledButtonProps) => (props.link ? "#007bff" : "white")};
  &:hover {
    text-decoration: ${(props: StyledButtonProps) =>
      props.link ? "underline" : "none"};
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
// #endregion

function Button({ text, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{text}</StyledButton>;
}

export default Button;
