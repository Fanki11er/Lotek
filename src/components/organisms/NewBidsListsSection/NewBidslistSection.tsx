import React from 'react';
import styled from 'styled-components';
import NewBidsList from '../../molecules/NewBidsList/NewBidsList';
import { lottoColorSchema, lottoPlusColorSchema } from '../../../themes/mainTheme';
import { LottoBid } from '../../../utils/classes';

const StyledWrapper = styled.section`
  display: flex;
  width: 100%;
`;

const NewBidsListSection = (props: { newBids: LottoBid[]; newPlusBids: LottoBid[] }) => {
  const { newBids, newPlusBids } = props;
  return (
    <StyledWrapper>
      <NewBidsList schema={lottoColorSchema} bidName={'Lotto'} newBidsList={newBids} />
      <NewBidsList schema={lottoPlusColorSchema} bidName={'Lotto Plus'} newBidsList={newPlusBids} />
    </StyledWrapper>
  );
};
export default NewBidsListSection;
