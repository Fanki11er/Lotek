import React, { useContext } from 'react';
import styled from 'styled-components';
import NewBidsGetter from '../../components/organisms/NewBidsGetter/NewBidsGetter';
import NumbersStatsSection from '../../components/molecules/NumbersStatsSection/NumbersStatsSection';
import NumbersStatusInfo from '../../components/organisms/NumbersStatsInfo/NumbersStatsInfo';
import { LottoBidsContext } from '../../Providers/LottoBidsProvider';
import { LottoPlusBidsContext } from '../../Providers/LottoPlusBidsProvider';
import { lottoColorSchema, lottoPlusColorSchema } from '../../themes/mainTheme';

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
  return (
    <StyledWrapper>
      <StyledTopWrapper>
        <NewBidsGetter />
        <NumbersStatsSection>
          <NumbersStatusInfo numbersList={lottoBids} colorSchema={lottoColorSchema} />
          <NumbersStatusInfo numbersList={lottoPlusBids} colorSchema={lottoPlusColorSchema} />
        </NumbersStatsSection>
      </StyledTopWrapper>
    </StyledWrapper>
  );
};

export default LottoView;
