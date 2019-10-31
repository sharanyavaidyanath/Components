import React from "react";
import styled from "styled-components";
import checkedImage from "../images/checked.png";
import { FONT_SIZES } from "../utils/constants";
import { capitalize } from "../utils/helpers";
import { StyledComponentProps } from "../utils/types";

export interface FeatureListProps {
  features: Array<string>;
}

// #region styled-components
const StyledFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`;

const StyledFeature = styled.li`
  color: seagreen;
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: ${FONT_SIZES.BIG};
  animation: fadeIn 0.5s linear;
  animation-fill-mode: both;
  li:nth-child(1) {
    animation-delay: 0.25s;
  }
  li:nth-child(2) {
    animation-delay: 0.5s;
  }

  li:nth-child(3) {
    animation-delay: 0.75s;
  }

  li:nth-child(4) {
    animation-delay: 1s;
  }

  li:nth-child(5) {
    animation-delay: 1.25s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      top: 100px;
    }
    75% {
      opacity: 0.5;
      top: 0px;
    }
    100% {
      opacity: 1;
    }
  }
  &::before {
    content: " ";
    height: ${FONT_SIZES.NORMAL};
    width: ${FONT_SIZES.NORMAL};
    background-image: url(${checkedImage});
    background-size: ${FONT_SIZES.NORMAL} ${FONT_SIZES.NORMAL};
    display: inline-block;
    margin-right: 25px;
    position: relative;
    top: 2px;
  }
`;
// #endregion

const FeatureList = ({
  features,
  className,
}: FeatureListProps & StyledComponentProps) => {
  return (
    <StyledFeatureList className={className}>
      {features.map(feature => (
        <StyledFeature key={feature}>{capitalize(feature)}</StyledFeature>
      ))}
    </StyledFeatureList>
  );
};

export default FeatureList;
