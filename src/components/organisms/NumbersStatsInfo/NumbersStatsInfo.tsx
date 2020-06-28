import React from 'react';
import styled from 'styled-components';
import NumbersStatsList from '../../molecules/NumbersStatsList/NumbersStatsList';
import usePreparedArray from '../../../Hooks/usePreparedArray';
import { bidColorSchema } from '../../../utils/types';
import { LottoBid } from '../../../utils/classes';
import usePreparatoryValue from '../../../Hooks/usePreparatoryValues';
import NumbersStatsForm from '../NumbersStatsForm/NumberStatsForm';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
interface Props {
  numbersList: Array<LottoBid> | [];
  gameNumberOfNumbers: number;
  colorSchema: bidColorSchema;
}

const NumbersStatsInfo = (props: Props) => {
  const { numbersList, colorSchema, gameNumberOfNumbers } = props;
  const maxBidsNumber = numbersList.length;
  const { bidsNumber, numbersNumber, getFormValues } = usePreparatoryValue(10, 8);
  const preparedArray = usePreparedArray(numbersList, bidsNumber, numbersNumber);

  return (
    <StyledWrapper>
      <NumbersStatsForm
        maxBidsNumber={maxBidsNumber}
        maxNumbersNumber={gameNumberOfNumbers}
        defaultNumberOfNumbers={numbersNumber}
        defaultBidsNumber={bidsNumber}
        getValues={getFormValues}
      />
      <NumbersStatsList numbersList={preparedArray} colorSchema={colorSchema} />
    </StyledWrapper>
  );
};

export default NumbersStatsInfo;
