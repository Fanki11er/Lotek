import React from 'react';
import styled from 'styled-components';
import { lottoColorSchema, lottoPlusColorSchema } from '../../../themes/mainTheme';
import { LottoBid } from '../../../utils/classes';
import { mergeLottoBids, mergeLottoPlusBids } from '../../../store/actions/lottoBidsActions';
import { bidsTypes } from '../../../utils/types';
import NewBidsList from '../../molecules/NewBidsList/NewBidsList';

const StyledWrapper = styled.section`
  display: flex;
  width: 100%;
`;

interface Props {
  newBids: LottoBid[];
  newPlusBids: LottoBid[];
  resetBids: (type: string) => void;
}

const NewBidsListSection = (props: Props) => {
  const { newBids, newPlusBids, resetBids } = props;
  const { lotto, lottoPlus } = bidsTypes;
  const lottoButtonsActions = {
    merge: mergeLottoBids,
    reset: resetBids,
    bidType: lotto,
  };
  const lottoPlusButtonsActions = {
    merge: mergeLottoPlusBids,
    reset: resetBids,
    bidType: lottoPlus,
  };
  return (
    <StyledWrapper>
      <NewBidsList
        schema={lottoColorSchema}
        newBidsList={newBids}
        bidName={'Lotto'}
        buttonActions={lottoButtonsActions}
      />
      <NewBidsList
        schema={lottoPlusColorSchema}
        newBidsList={newPlusBids}
        bidName={'Lotto Plus'}
        buttonActions={lottoPlusButtonsActions}
      />
    </StyledWrapper>
  );
};
export default NewBidsListSection;
