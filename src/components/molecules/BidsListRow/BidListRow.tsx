import React from 'react';
import styled from 'styled-components';
import { lottoBidObj, bidColorSchema } from '../../../utils/types';
import NumberBall from '../../atoms/NumberBall/NumberBall';

const StyledBidRow = styled.li`
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 30px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.green};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.transparentGreen};
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

const BidListRow = (props: { bid: lottoBidObj; schema: bidColorSchema }) => {
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
      <StyledLabel>{`${bidId} ${bidDate}`}</StyledLabel>
      <StyledNumbersWrapper>{renderNumbers(numbers)}</StyledNumbersWrapper>
    </StyledBidRow>
  );
};

export default BidListRow;
