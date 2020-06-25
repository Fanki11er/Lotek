import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import MissingBidsList from '../../atoms/MissingBidsList/MissingBidsList';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 150px;
  border: 2px solid ${({ theme }) => theme.lightRed};
  border-radius: 5px;
  color: ${({ theme }) => theme.lightRed};
  padding: 5px;
`;

const StyledListsWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
  justify-content: space-around;
`;

const StyledHeader = styled.div`
  color: ${({ theme }) => theme.lightRed};
  font-size: ${({ theme }) => theme.fontSizeDesktop.normal};
  margin: 10px 15px;
  text-align: center;
`;
interface Props {
  missingBids: {
    missingLottoBids: number[];
    missingLottoPlusBids: number[];
  };
}

const MissingBidsInfo = (props: Props) => {
  const {
    missingBids: { missingLottoBids, missingLottoPlusBids },
  } = props;

  //console.log(missingLottoBids, missingLottoPlusBids);
  const { lottoPlusBlue } = useContext(ThemeContext);
  return (
    <StyledWrapper>
      <StyledHeader>Brakujące losowania</StyledHeader>
      <StyledListsWrapper className={'withScroll'}>
        <MissingBidsList elements={missingLottoBids} />
        <MissingBidsList elements={missingLottoPlusBids} dotColor={lottoPlusBlue} />
      </StyledListsWrapper>
    </StyledWrapper>
  );
};

export default MissingBidsInfo;
