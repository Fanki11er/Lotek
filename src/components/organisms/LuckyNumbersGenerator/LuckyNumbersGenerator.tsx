import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 48%;
  min-width: 500px;
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 10px;
  height: 150px;
  margin-top: 30px;
  padding: 10px;
`;

const LuckyNumbersGenerator = (props: React.Props<React.ReactElement>) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default LuckyNumbersGenerator;
