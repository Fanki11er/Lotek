import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import MissingBidsList from '../../atoms/MissingBidsList/MissingBidsList';
import { mainTheme } from '../../../utils/types';
import theme from '../../../themes/mainTheme';

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
  color: ${(props: { theme: mainTheme }) => theme.lightRed};
  font-size: ${(props: { theme: mainTheme }) => theme.fontSizeDesktop.normal};
  margin: 10px 15px;
  text-align: center;
`;

const MissingBidsInfo = () => {
  const { lottoPlusBlue } = useContext(ThemeContext);
  return (
    <StyledWrapper>
      <StyledHeader>Brakujące losowania</StyledHeader>
      <StyledListsWrapper className={'withScroll'}>
        <MissingBidsList elements={[6602, 6603, 6605, 6606, 6607, 6666]} />
        <MissingBidsList elements={[6602, 6603]} dotColor={lottoPlusBlue} />
      </StyledListsWrapper>
    </StyledWrapper>
  );
};

export default MissingBidsInfo;
