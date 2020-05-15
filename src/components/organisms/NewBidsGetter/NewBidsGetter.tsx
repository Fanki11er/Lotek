import React, { useState } from 'react';
import styled from 'styled-components';
import GetNewBidsForm from '../../molecules/GetNewBidsForm/GetNewBidsForm';
import MissingBidsInfo from '../../molecules/MissingBidsInfo/MissingBidsInfo';
import NewBidsListSection from '../NewBidsListsSection/NewBidslistSection';
import { createNewBidsList, checkForBids } from '../../../utils/utils';
import { lottoRegSettings, lottoPlusRegSettings } from '../../../utils/regExps';
import { LottoBid } from '../../../utils/classes';

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

  const [newLottoBidsList, setNewLottoBidsList] = useState(initialArray);
  const [newLottoPlusBidsList, setNewLottoPlusBidsList] = useState(initialArray);
  const [allLottoBids, setAllLottoBids] = useState([]);
  const [allLottoPlusBids, setAllLottoPlusBids] = useState([]);

  const getBidsList = (plainString: string) => {
    setNewLottoBidsList(
      createNewBidsList(plainString, lottoRegSettings, allLottoBids, checkForBids),
    );
    setNewLottoPlusBidsList(
      createNewBidsList(plainString, lottoPlusRegSettings, allLottoPlusBids, checkForBids),
    );
  };
  return (
    <StyledWrapper>
      <StyledFlexWrapper>
        <GetNewBidsForm getList={getBidsList} />
        <MissingBidsInfo />
      </StyledFlexWrapper>
      <NewBidsListSection newBids={newLottoBidsList} newPlusBids={newLottoPlusBidsList} />
    </StyledWrapper>
  );
};

export default NewBidsGetter;
