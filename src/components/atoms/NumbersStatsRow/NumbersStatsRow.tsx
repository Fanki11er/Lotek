import React from 'react';
import styled from 'styled-components';
import NumberBall from '../../atoms/NumberBall/NumberBall';
import { bidColorSchema } from '../../../utils/types';

const StyledWrapper = styled.div`
  display: flex;
  width: 100px;
  margin-top: 10px;
  justify-content: space-around;
`;
interface Props {
  schema: bidColorSchema;
  ballNumber: string;
  quantity: number;
}

const StyledQuantity = styled.div`
  width: 50px;
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 5px;
  height: 25px;
  color: ${({ theme }) => theme.green};
  text-align: center;
  transition: opacity 0.4s;
`;

const NumbersStatsRow = (props: Props) => {
  const { schema, ballNumber, quantity } = props;
  return (
    <StyledWrapper className={'showElement'}>
      <NumberBall schema={schema}>{ballNumber}</NumberBall>
      <StyledQuantity>{quantity}</StyledQuantity>
    </StyledWrapper>
  );
};

export default NumbersStatsRow;
