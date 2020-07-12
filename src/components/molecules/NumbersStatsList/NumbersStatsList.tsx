import React from 'react';
import styled from 'styled-components';
import NumbersStatsRow from '../../atoms/NumbersStatsRow/NumbersStatsRow';
import { bidColorSchema } from '../../../utils/types';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 300px;
  margin: 0;
  padding: 0;
`;
interface Props {
  numbersList: [string, number][] | [];
  colorSchema: bidColorSchema;
}

const NumberStatsList = (props: Props) => {
  const { numbersList, colorSchema } = props;

  const renderNumbersStatsList = (numbersList: [string, number][]) => {
    if (!numbersList.length) return null;
    return numbersList!.map(([key, value]) => {
      return <NumbersStatsRow ballNumber={key} quantity={value} key={key} schema={colorSchema} />;
    });
  };

  return (
    <StyledList className={'withScroll'}>
      {numbersList.length && renderNumbersStatsList(numbersList)}
    </StyledList>
  );
};

export default NumberStatsList;
