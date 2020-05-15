import React from 'react';
import styled from 'styled-components';
import { mainTheme } from '../../../utils/types';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  min-height: 25%;
  min-width: 40%;
  max-width: 45%;
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const StyledListElement = styled.li`
  position: relative;
  color: ${({ theme }) => theme.lightRed};
  width: 100%;
  margin: 2px 0;
  text-indent: 15px;

  &::before {
    position: absolute;
    left: 10px;
    top: 6px;
    color: transparent;
    content: '';
    border-radius: 100%;
    width: 10px;
    height: 10px;
    background-color: ${(props: { theme: mainTheme; color?: string }) =>
      props.color ? props.color : props.theme.lottoYellow};
  }
`;

const renderListElements = (elements: number[], dotColor?: string) => {
  return elements.map((listElement, index) => {
    return (
      <StyledListElement color={dotColor} key={index} data-testid={'test-li'}>
        {listElement}
      </StyledListElement>
    );
  });
};

const MissingBidsList = (props: { elements: number[]; dotColor?: string }) => {
  const { elements, dotColor } = props;
  return <StyledList data-testid={'test-ul'}>{renderListElements(elements, dotColor)}</StyledList>;
};

export default MissingBidsList;
