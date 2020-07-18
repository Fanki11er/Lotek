import React from 'react';
import styled from 'styled-components';
import StyledRow from '../../atoms/StyledRow/StyledRow';
import StandardButton from '../../atoms/StandardButton/StandardButton';
import { LottoBidTypes } from '../../../utils/types';
import NumberBall from '../../atoms/NumberBall/NumberBall';
import { lottoColorSchema, lottoPlusColorSchema } from '../../../themes/mainTheme';

const StyledSetsRow = styled(StyledRow)`
  height: 45px;
  align-items: center;
  width: 99%;
`;
const StyledDate = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;

  color: ${({ theme }) => theme.green};
`;

const StyledBlueButton = styled(StandardButton)`
  color: ${({ theme }) => theme.lottoPlusBlue};
  background-color: ${({ theme }) => theme.transparentBlue};
  border: 2px solid ${({ theme }) => theme.lottoPlusBlue};
  height: 30px;
`;

const StyledRedButton = styled(StandardButton)`
  color: ${({ theme }) => theme.lightRed};
  background-color: ${({ theme }) => theme.transparentLightRed};
  border: 2px solid ${({ theme }) => theme.lightRed};
  height: 30px;
`;

const StyledNumbersWrapper = styled.div`
  display: flex;
  align-items: center;
`;
interface Props {
  date: string;
  numbers: string[];
  type: LottoBidTypes;
}
const SetsRow = (props: Props) => {
  const { date, type, numbers } = props;
  const schema = type === 'lotto' ? lottoColorSchema : lottoPlusColorSchema;

  const renderNumbers = (numbers: string[]) => {
    return numbers.map((number) => (
      <NumberBall schema={schema} key={number}>
        {number}
      </NumberBall>
    ));
  };
  return (
    <StyledSetsRow>
      <StyledDate>{date}</StyledDate>
      <StyledNumbersWrapper>{renderNumbers(numbers)}</StyledNumbersWrapper>
      <StyledBlueButton>Statystyki</StyledBlueButton>
      <StyledRedButton>Usuń</StyledRedButton>
    </StyledSetsRow>
  );
};

export default SetsRow;
