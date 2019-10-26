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
  margin: 0;
`;

const StyledFeature = styled.li`
  color: seagreen;
  font-weight: 500;
  margin-bottom: 20px;

  &::before {
    content: " ";
    height: ${FONT_SIZES.NORMAL};
    width: ${FONT_SIZES.NORMAL};
    background-image: url(${checkedImage});
    background-size: ${FONT_SIZES.NORMAL} ${FONT_SIZES.NORMAL};
    display: inline-block;
    margin-right: 18px;
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
