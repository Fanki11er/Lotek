import React from 'react';
import styled from 'styled-components';
import { bidColorSchema } from '../../../utils/types';
import StandardButton from '../../atoms/StandardButton/StandardButton';
import { LottoBid } from '../../../utils/classes';
import BidListRow from '../BidsListRow/BidListRow';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 49%;
  height: 250px;
  margin: 30px 5px 20px 5px;
  border: 2px solid ${(props: { schema: bidColorSchema }) => props.schema.mainColor};
  border-radius: 5px;
`;

const StyledHeader = styled.div`
  color: ${(props: { schema: bidColorSchema }) => props.schema.mainColor};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizeDesktop.larger};
  margin: 10px 0;
`;

const StyledButton = styled(StandardButton)`
  margin: 15px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 155px;
  align-items: center;
`;

const StyledInfo = styled.div`
  color: ${({ theme }) => theme.lightRed};
  font-size: ${({ theme }) => theme.fontSizeDesktop.normal};
`;

interface Props {
  schema: bidColorSchema;
  bidName: string;
  newBidsList: LottoBid[];
}

const NewBidsList = (props: Props) => {
  const { schema, bidName, newBidsList } = props;

  const renderBidRows = (newBidsList: LottoBid[]) => {
    return newBidsList.map((bid, index) => <BidListRow bid={bid} schema={schema} key={index} />);
  };
  return (
    <StyledWrapper schema={schema}>
      <StyledHeader schema={schema}>{bidName}</StyledHeader>
      {newBidsList.length ? (
        <StyledList className={'withScroll'} data-testid={'new-bids-list'}>
          {renderBidRows(newBidsList)}
        </StyledList>
      ) : (
        <StyledInfo data-testid={'info-div'}>Brak elementów do wyświetlenia</StyledInfo>
      )}
      <StyledButton>Dodaj</StyledButton>
    </StyledWrapper>
  );
};

export default NewBidsList;
