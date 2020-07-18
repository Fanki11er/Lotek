import React from 'react';
import styled from 'styled-components';
import { bidColorSchema, bidsTypes } from '../../../utils/types';
import { LottoBid } from '../../../utils/classes';
import StandardButton from '../../atoms/StandardButton/StandardButton';
import BidListRow from '../BidsListRow/BidListRow';
import useMergeBids from '../../../Hooks/useMergeBids';

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
  transition: opacity 0.5s;
`;

const StyledInfo = styled.div`
  color: ${({ theme }) => theme.lightRed};
  font-size: ${({ theme }) => theme.fontSizeDesktop.normal};
`;

interface Props {
  schema: bidColorSchema;
  newBidsList: LottoBid[];
  buttonActions: {
    merge: (newBidsList: LottoBid[]) => any;
    reset: (type: string) => void;
    bidType: bidsTypes;
  };
  bidName: string;
}

const NewBidsList = (props: Props) => {
  let {
    schema,
    bidName,
    newBidsList,
    buttonActions: { reset, bidType },
  } = props;
  const mergeBids = useMergeBids(bidType, newBidsList);

  const renderBidRows = (newBidsList: LottoBid[]) => {
    return newBidsList.map((bid) => <BidListRow bid={bid} schema={schema} key={bid.bidId} />);
  };
  return (
    <StyledWrapper schema={schema}>
      <StyledHeader schema={schema}>{bidName}</StyledHeader>
      {newBidsList.length ? (
        <StyledList className={'withScroll showElement'} data-testid={'new-bids-list'}>
          {renderBidRows(newBidsList)}
        </StyledList>
      ) : (
        <StyledInfo data-testid={'info-div'}>Brak elementów do wyświetlenia</StyledInfo>
      )}
      <StyledButton
        onClick={() => {
          mergeBids();
          reset(bidType);
        }}
        data-testid={'add-button'}
      >
        Dodaj
      </StyledButton>
    </StyledWrapper>
  );
};

export default NewBidsList;
