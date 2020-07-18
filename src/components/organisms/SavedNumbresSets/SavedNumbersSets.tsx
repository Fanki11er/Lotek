import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import { LottoSet } from '../../../utils/types';
import SetsRow from '../../molecules/SetsRow/SetsRow';

const StyledSectionWrapper = styled(SectionWrapper)`
  height: 400px;
  border: 3px solid ${({ theme }) => theme.blue};
`;

interface Props {
  lottoSets: LottoSet[];
  lottoPlusSets: LottoSet[];
}
const SavedNumbersSets = (props: Props) => {
  const { lottoSets, lottoPlusSets } = props;

  const mergeSets = (lottoSets: LottoSet[], lottoPlusSets: LottoSet[]) => {
    const lotto = [...lottoSets];
    const lottoPlus = [...lottoPlusSets];
    let iterator = 0;
    const mergedSets: LottoSet[] = [];
    while (lotto[iterator] !== undefined || lottoPlus[iterator] !== undefined) {
      lotto[iterator] && mergedSets.push(lotto[iterator]);
      lottoPlus[iterator] && mergedSets.push(lottoPlus[iterator]);
      iterator++;
    }
    return mergedSets;
  };

  const renderSets = (sets: LottoSet[]) => {
    return !sets.length
      ? []
      : sets.map(({ createDate, numbers, id, type }) => {
          return <SetsRow date={createDate} numbers={numbers} type={type} key={id} />;
        });
  };
  return (
    <StyledSectionWrapper>{renderSets(mergeSets(lottoSets, lottoPlusSets))}</StyledSectionWrapper>
  );
};

export default SavedNumbersSets;
