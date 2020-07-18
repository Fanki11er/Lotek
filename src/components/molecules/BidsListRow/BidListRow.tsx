import React from 'react';
import styled from 'styled-components';
import { bidColorSchema } from '../../../utils/types';
import { LottoBid } from '../../../utils/classes';
import NumberBall from '../../atoms/NumberBall/NumberBall';
import StyledBidRow from '../../atoms/StyledRow/StyledRow';

const StyledLabel = styled.div`
  display: flex;
  color: ${({ theme }) => theme.green};
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizeDesktop.smaller};
  margin: 0 5px;
`;
const StyledNumbersWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  bid: LottoBid;
  schema: bidColorSchema;
}

const BidListRow = (props: Props) => {
  const {
    bid: { bidId, bidDate, numbers },
    schema,
  } = props;

  const renderNumbers = (numbers: string[]) => {
    return numbers.map((number, index) => (
      <NumberBall schema={schema} key={index}>
        {number}
      </NumberBall>
    ));
  };
  return (
    <StyledBidRow>
      <StyledLabel data-testid={'bid-label'}>{`${bidId} ${bidDate}`}</StyledLabel>
      <StyledNumbersWrapper data-testid={'bid-numbers'}>
        {renderNumbers(numbers)}
      </StyledNumbersWrapper>
    </StyledBidRow>
  );
};

export default BidListRow;
