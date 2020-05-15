import React from 'react';
import styled from 'styled-components';
import NewBidsGetter from '../../components/organisms/NewBidsGetter/NewBidsGetter';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`;

const LottoView = () => {
  return (
    <StyledWrapper>
      <NewBidsGetter />;
    </StyledWrapper>
  );
};

export default LottoView;
