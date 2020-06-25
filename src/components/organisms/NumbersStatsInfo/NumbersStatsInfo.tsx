import React from 'react';
import styled from 'styled-components';
import NumbersStatsList from '../../molecules/NumbersStatsList/NumbersStatsList';
import usePreparedArray from '../../../Hooks/usePreparedArray';
import { bidColorSchema } from '../../../utils/types';
import { LottoBid } from '../../../utils/classes';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
interface Props {
  numbersList: Array<LottoBid> | [];
  colorSchema: bidColorSchema;
}

const NumbersStatsInfo = (props: Props) => {
  const { numbersList, colorSchema } = props;
  const bidsNumber = 20;
  const numbersNumber = 8;
  const preparedArray = usePreparedArray(numbersList, bidsNumber, numbersNumber);

  return (
    <StyledWrapper>
      <NumbersStatsList numbersList={preparedArray} colorSchema={colorSchema} />
    </StyledWrapper>
  );
};

export default NumbersStatsInfo;
