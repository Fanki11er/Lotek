import React from 'react';
import styled from 'styled-components';
import { bidColorSchema } from '../../../utils/types';
import { LottoBid } from '../../../utils/classes';
import NumberBall from '../../atoms/NumberBall/NumberBall';

const StyledBidRow = styled.li`
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 30px;
  padding: 3px 0;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.green};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.transparentGreen};
  animation-name: show;
  animation-duration: 0.7s;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

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
