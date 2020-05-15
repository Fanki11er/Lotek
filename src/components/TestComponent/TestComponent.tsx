import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { createNewBidsList, checkForBids, mergeBids } from '../../utils/utils';
import { lottoRegSettings } from '../../utils/regExps';
import { lottoBidObj } from '../../utils/types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 100px;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 65px;
`;

const StyledListRow = styled.li`
  height: 25px;
  border: 2px solid black;
  width: 300px;
  margin: 5px;
`;

const TestComponent = () => {
  const initial: lottoBidObj[] = [];
  const [plainBids, setNewPlainBids] = useState(initial);
  const [bidsList, updateList] = useState(initial);
  const plainInput = useRef<HTMLInputElement>(null);

  const getPlainBids = () => {
    if (null !== plainInput.current) {
      const plainContent = plainInput.current.value;
      const newBidsList = createNewBidsList(plainContent, lottoRegSettings, bidsList, checkForBids);
      setNewPlainBids(newBidsList);
      plainInput.current.value = '';
    }
  };

  const addNewBidsToList = () => {
    const mergedList = mergeBids(bidsList, plainBids);
    updateList(mergedList);
    setNewPlainBids(initial);
  };
  return (
    <StyledWrapper>
      <StyledInput type={'textArea'} ref={plainInput} />
      <StyledButton onClick={getPlainBids}>Pobierz losowania</StyledButton>
      <ol>
        {plainBids.map(({ gameName, bidId, bidDate, numbers }) => {
          return (
            <StyledListRow
              key={bidId}
            >{`${gameName} ${bidId} ${bidDate} ${numbers}`}</StyledListRow>
          );
        })}
      </ol>
      <StyledButton onClick={addNewBidsToList}>Dodaj do Listy losowań</StyledButton>
      <ol>
        {bidsList.map(({ gameName, bidId, bidDate, numbers }) => {
          return (
            <StyledListRow
              key={bidId}
            >{`${gameName} ${bidId} ${bidDate} ${numbers}`}</StyledListRow>
          );
        })}
      </ol>
    </StyledWrapper>
  );
};

export default TestComponent;
