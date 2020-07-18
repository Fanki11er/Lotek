import React, { useState } from 'react';
import styled from 'styled-components';
import StandardButton from '../../atoms/StandardButton/StandardButton';
import { LottoBid } from '../../../utils/classes';
import NumberBall from '../../atoms/NumberBall/NumberBall';
import { bidColorSchema, LottoBidTypes } from '../../../utils/types';
import { makeLuckyNumbers } from '../../../utils/utils';
import useNumbersSets from '../../../Hooks/useNumbersSets';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 10px 0;
`;

const StyledBallsWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled(StandardButton)`
  width: 150px;
  border: 2px solid ${({ theme }) => theme.lottoYellow};
  color: ${({ theme }) => theme.lightRed};
  background-color: ${({ theme }) => theme.transparentLottoYellow};
`;
interface Props {
  buttonLabel: string;
  bidsList: LottoBid[];
  schema: bidColorSchema;
  type: LottoBidTypes;
}

const LuckyLottoPlusGenerator = (props: Props) => {
  const { buttonLabel, bidsList, schema, type } = props;
  const [luckyNumbers, setLuckyNumbers] = useState<string[]>([]);
  const sendSets = useNumbersSets(type, luckyNumbers);

  const generateLuckyNumbers = () => {
    setLuckyNumbers(makeLuckyNumbers(bidsList, 49, 15, 6));
  };
  const renderLuckyNumbers = (luckyNumbers: string[]) => {
    return luckyNumbers.map((number) => {
      return (
        <NumberBall schema={schema} key={number}>
          {number}
        </NumberBall>
      );
    });
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={() => generateLuckyNumbers()}>{buttonLabel}</StyledButton>
      <StyledBallsWrapper>{renderLuckyNumbers(luckyNumbers)}</StyledBallsWrapper>
      <StandardButton onClick={() => sendSets()}>Zapisz</StandardButton>
    </StyledWrapper>
  );
};

export default LuckyLottoPlusGenerator;
//! useNumbersSets
