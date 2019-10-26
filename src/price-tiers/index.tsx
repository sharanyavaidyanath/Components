import React from "react";
import styled from "styled-components";

import PriceCard, { PriceCardProps } from "../price-card";
import Toggler from "../toggler";
import { PLAN_DURATIONS } from "../utils/constants";

export interface PriceTierListProps {
  plans: Array<PriceCardProps>;
}

interface ContainerProps {
  length: number;
}

// #region styled-components

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.length}, 1fr)`};
  width: 100%;
  column-gap: 32px;
  row-gap: 32px;
`;

const StyledToggler = styled(Toggler)`
  grid-area: 1/1/-1/-1;
  justify-self: center;
`;

// #endregion

const PriceTierList = ({ plans }: PriceTierListProps) => {
  const [isMonthlySelected, setMonthlySelected] = React.useState(true);

  const onPlanChange = (option: string) => {
    setMonthlySelected(option === PLAN_DURATIONS.MONTHLY);
  };

  return (
    <Container length={plans.length}>
      <StyledToggler
        options={Object.values(PLAN_DURATIONS)}
        onOptionChange={onPlanChange}
      />
      {plans.map((plan, index) => (
        <PriceCard
          key={plan.planName}
          {...plan}
          showAnnual={!isMonthlySelected}
          index={index}
        />
      ))}
    </Container>
  );
};

export default PriceTierList;
