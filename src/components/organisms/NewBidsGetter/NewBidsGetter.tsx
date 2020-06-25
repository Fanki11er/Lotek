import React from 'react';
import styled from 'styled-components';
import GetNewBidsForm from '../../molecules/GetNewBidsForm/GetNewBidsForm';
import MissingBidsInfo from '../../molecules/MissingBidsInfo/MissingBidsInfo';
import NewBidsListSection from '../NewBidsListsSection/NewBidslistSection';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import useBids from '../../../Hooks/useLottoBids';

const StyledFlexWrapper = styled.div`
  display: flex;
`;

const NewBidsGetter = () => {
  const {
    newLottoBidsList,
    newLottoPlusBidsList,
    missingLottoBids,
    missingLottoPlusBids,
    getBidsList,
    resetBids,
  } = useBids();

  return (
    <SectionWrapper>
      <StyledFlexWrapper>
        <GetNewBidsForm getList={getBidsList} />
        <MissingBidsInfo missingBids={{ missingLottoBids, missingLottoPlusBids }} />
      </StyledFlexWrapper>
      <NewBidsListSection
        newBids={newLottoBidsList}
        newPlusBids={newLottoPlusBidsList}
        resetBids={resetBids}
      />
    </SectionWrapper>
  );
};

export default NewBidsGetter;
