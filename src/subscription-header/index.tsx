import React from "react";
import styled from "styled-components";
import { FONT_SIZES } from "../utils/constants";
import { StyledComponentProps } from "../utils/types";

export interface SubscriptionHeaderProps {
  planName: string;
  monthlyPrice: number;
  yearlyPrice: number;
  showAnnual?: boolean;
}

// #region styled-components

const Container = styled.div<{ showAnnual?: boolean }>`
  background: radial-gradient(
    circle at 12.3% 19.3%,
    rgba(58, 50, 125, 0.93) 0%,
    rgb(102, 91, 185) 100.2%
  );
  height: 180px;
  width: 300px;
  display: grid;
  justify-content: center;
  justify-items: center;
  color: white;
  row-gap: 20px;
  align-content: center;
  line-height: 1;
  & > .plan {
    font-weight: 700;
    font-size: ${FONT_SIZES.BIGGEST};
  }
  & > .price {
    font-size: ${FONT_SIZES.GREAT};
    span.normal {
      font-size: ${FONT_SIZES.NORMAL};
    }
  }
  & > .yearly-price {
    font-size: ${FONT_SIZES.SMALL};
    line-height: 1;
    height: ${props => (props.showAnnual ? FONT_SIZES.SMALL : 0)};
    opacity: ${props => (props.showAnnual ? 1 : 0)};
    transition: all 100ms linear 0s;
  }
`;

// #endregion

const SubscriptionHeader = ({
  planName,
  monthlyPrice,
  yearlyPrice,
  showAnnual,
  className,
}: SubscriptionHeaderProps & StyledComponentProps) => {
  let price = monthlyPrice;
  if (showAnnual) {
    price = Math.ceil(yearlyPrice / 12);
  }

  return (
    <Container className={className} showAnnual={showAnnual}>
      <div className="plan">{planName}</div>
      <div className="price">
        $<span className="price">{price}</span>
        <span className="normal">/month</span>
      </div>
      <div className="yearly-price">
        Billed <span className="number">${yearlyPrice}</span> yearly
      </div>
    </Container>
  );
};

export default SubscriptionHeader;
