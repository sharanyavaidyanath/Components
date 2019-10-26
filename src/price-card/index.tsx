import React from "react";
import SubscriptionHeader, {
  SubscriptionHeaderProps,
} from "../subscription-header";
import FeatureList, { FeatureListProps } from "../feature-list";
import styled from "styled-components";
import Button from "../button";
import { FONT_SIZES } from "../utils/constants";

export interface PriceCardProps
  extends SubscriptionHeaderProps,
    FeatureListProps {}
export interface IndexProps {
  index: number;
}

// #region styled-components

const StyledFeatureList = styled(FeatureList)`
  margin-left: 24px;
  margin-top: 32px;
  margin-bottom: 40px;
`;

const StyledSubscriptionHeader = styled(SubscriptionHeader)`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 336px;
`;

const StyledButton = styled(Button)`
  margin: 10px 30px;
  background-color: rgb(101, 90, 182);
  font-size: ${FONT_SIZES.NORMAL};
  font-weight: 400;
  font-size: ${FONT_SIZES.NORMAL};
  &:hover {
    background-color: rgb(87, 76, 171);
  }
`;

const Container = styled.div<IndexProps>`
  box-shadow: rgba(128, 128, 128, 0.2) 0px 4px 7px 3px;
  background-color: white;

  border-radius: 15px;
  display: grid;
  grid-template-rows: 180px 1fr auto;
  animation-name: animationName;
  animation-delay: ${props => `${(props.index + 1) * 200}ms`};
  animation-duration: 1s;
  animation-timing-function: ease-in;
  @keyframes animationName {
    0% {
      opacity: 0;
      transform: translate3d(0px, 50px, 0px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

// #endregion

const PriceCard = ({
  features,
  index,
  ...subscriptionHeaderProps
}: PriceCardProps & IndexProps) => {
  return (
    <Container index={index}>
      <StyledSubscriptionHeader {...subscriptionHeaderProps} />
      <StyledFeatureList features={features} />
      <StyledButton text="Purchase" />
    </Container>
  );
};

export default PriceCard;
