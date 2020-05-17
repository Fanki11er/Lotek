import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState, bidsTypes } from '../../../utils/types';
import { LottoBid } from '../../../utils/classes';
import { lottoRegSettings, lottoPlusRegSettings } from '../../../utils/regExps';
import { createNewBidsList, checkForBids } from '../../../utils/utils';
import GetNewBidsForm from '../../molecules/GetNewBidsForm/GetNewBidsForm';
import MissingBidsInfo from '../../molecules/MissingBidsInfo/MissingBidsInfo';
import NewBidsListSection from '../NewBidsListsSection/NewBidslistSection';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  width: 50%;
  height: 550px;
  border: 3px solid ${({ theme }) => theme.lottoYellow};
  border-radius: 15px;
  padding: 25px;
`;

const StyledFlexWrapper = styled.div`
  display: flex;
`;

const NewBidsGetter = () => {
  const initialArray: LottoBid[] = [];
  const { lotto, lottoPlus } = bidsTypes;

  const selectLottoBids = (state: RootState) => state.lottoBids.bids;
  const selectLottoPlusBids = (state: RootState) => state.lottoPlusBids.bids;

  const getBidsList = (plainString: string) => {
    setNewLottoBidsList(createNewBidsList(plainString, lottoRegSettings, lottoBids, checkForBids));
    setNewLottoPlusBidsList(
      createNewBidsList(plainString, lottoPlusRegSettings, lottoPlusBids, checkForBids),
    );
  };
  const resetBids = (type: string) => {
    type === lotto && setNewLottoBidsList(initialArray);
    type === lottoPlus && setNewLottoPlusBidsList(initialArray);
  };

  const [newLottoBidsList, setNewLottoBidsList] = useState(initialArray);
  const [newLottoPlusBidsList, setNewLottoPlusBidsList] = useState(initialArray);

  const lottoBids = useSelector(selectLottoBids);
  const lottoPlusBids = useSelector(selectLottoPlusBids);

  return (
    <StyledWrapper>
      <StyledFlexWrapper>
        <GetNewBidsForm getList={getBidsList} />
        <MissingBidsInfo />
      </StyledFlexWrapper>
      <NewBidsListSection
        newBids={newLottoBidsList}
        newPlusBids={newLottoPlusBidsList}
        resetBids={resetBids}
      />
    </StyledWrapper>
  );
};

export default NewBidsGetter;
