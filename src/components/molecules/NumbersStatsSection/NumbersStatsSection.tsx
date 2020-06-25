import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';

const StyledSectionWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.green};
  min-width: 500px;
  width: 48%;
  align-items: center;
`;

const StyledHeader = styled.h2`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.fontSizeDesktop.large};
  margin-top: 0;
`;

const StyledFlexContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const NumbersStatsSection = (props: React.Props<React.Component>) => {
  const { children } = props;
  return (
    <StyledSectionWrapper>
      <StyledHeader>Statystyki</StyledHeader>
      <StyledFlexContent>{children}</StyledFlexContent>
    </StyledSectionWrapper>
  );
};

export default NumbersStatsSection;
