import React, { useContext } from 'react';
import styled from 'styled-components';
import NewBidsGetter from '../../components/organisms/NewBidsGetter/NewBidsGetter';
import NumbersStatsSection from '../../components/molecules/NumbersStatsSection/NumbersStatsSection';
import NumbersStatusInfo from '../../components/organisms/NumbersStatsInfo/NumbersStatsInfo';
import { LottoBidsContext } from '../../Providers/LottoBidsProvider';
import { LottoPlusBidsContext } from '../../Providers/LottoPlusBidsProvider';
import { lottoColorSchema, lottoPlusColorSchema } from '../../themes/mainTheme';
import useListenerToDatabase from '../../Hooks/useListenerToDatabase';
import {
  lottoBidsEndpoint,
  lottoPlusBidsEndpoint,
  lottoSetsEndpoint,
  lottoPlusSetsEndpoint,
} from '../../Firebase/baseEndpoints';
import LuckyNumbersGenerator from '../../components/organisms/LuckyNumbersGenerator/LuckyNumbersGenerator';
import LuckyLottoPlusGenerator from '../../components/molecules/LuckyLottoAndPlusGenerator/LuckyLottoAndPlusgenerator';
import SavedNumbersSets from '../../components/organisms/SavedNumbresSets/SavedNumbersSets';
import useListenerForSets from '../../Hooks/useListenerForSets';
import { LottoSetsContext } from '../../Providers/LottoSetsProvider';
import { LottoPlusSetsContext } from '../../Providers/LottoPlusSetsProvider';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`;

const StyledTopWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-around;
  flex-flow: wrap row;
`;

const LottoView = () => {
  const { lottoBids } = useContext(LottoBidsContext);
  const { lottoPlusBids } = useContext(LottoPlusBidsContext);
  const { lottoSets } = useContext(LottoSetsContext);
  const { lottoPlusSets } = useContext(LottoPlusSetsContext);
  useListenerToDatabase(lottoBidsEndpoint, 'lotto');
  useListenerToDatabase(lottoPlusBidsEndpoint, 'lottoPlus');
  useListenerForSets(lottoSetsEndpoint, 'lotto');
  useListenerForSets(lottoPlusSetsEndpoint, 'lottoPlus');
  return (
    <StyledWrapper>
      <StyledTopWrapper>
        <NewBidsGetter />
        <NumbersStatsSection>
          <NumbersStatusInfo
            numbersList={lottoBids}
            colorSchema={lottoColorSchema}
            gameNumberOfNumbers={49}
          />
          <NumbersStatusInfo
            numbersList={lottoPlusBids}
            colorSchema={lottoPlusColorSchema}
            gameNumberOfNumbers={49}
          />
        </NumbersStatsSection>
      </StyledTopWrapper>
      <StyledTopWrapper>
        <LuckyNumbersGenerator>
          <LuckyLottoPlusGenerator
            buttonLabel={'Generuj Lotto'}
            bidsList={lottoBids}
            schema={lottoColorSchema}
            type={'lotto'}
          />
          <LuckyLottoPlusGenerator
            buttonLabel={'Generuj Lotto Plus'}
            bidsList={lottoPlusBids}
            schema={lottoPlusColorSchema}
            type={'lottoPlus'}
          />
        </LuckyNumbersGenerator>
        <SavedNumbersSets lottoSets={lottoSets} lottoPlusSets={lottoPlusSets} />
      </StyledTopWrapper>
    </StyledWrapper>
  );
};

export default LottoView;
