import { createAction } from '@reduxjs/toolkit';
import { LottoBid } from '../../utils/classes';
import { LottoBidTypes } from '../../utils/types';

export const MERGE_LOTTO_BIDS: string = 'MERGE_LOTTO_BIDS';
export const MERGE_LOTTO_PLUS_BIDS: string = 'MERGE_LOTTO_PLUS_BIDS';
export const GET_LOTTO_BIDS_FROM_DATABASE: string = 'GET_LOTTO_BIDS_FROM_DATABASE';
export const GET_LOTTO_PLUS_BIDS_FROM_DATABASE: string = 'GET_LOTTO_PLUS_BIDS_FROM_DATABASE';
export const UNKNOWN_TYPE: string = 'UNKNOWN_TYPE';

export const mergeLottoBids = createAction(MERGE_LOTTO_BIDS, (newBids: LottoBid[]) => {
  return {
    payload: {
      newBids,
    },
  };
});

export const mergeLottoPlusBids = createAction(MERGE_LOTTO_PLUS_BIDS, (newBids: LottoBid[]) => {
  return {
    payload: {
      newBids,
    },
  };
});

const getTypeOfAction = (type: LottoBidTypes) => {
  switch (type) {
    case 'lotto': {
      return GET_LOTTO_BIDS_FROM_DATABASE;
    }
    case 'lottoPlus': {
      return GET_LOTTO_PLUS_BIDS_FROM_DATABASE;
    }
    default: {
      return UNKNOWN_TYPE;
    }
  }
};
export const getBidsFromDatabase = (type: LottoBidTypes, bids: LottoBid[]) => {
  const makeData = (bids: LottoBid[]) => {
    return {
      payload: {
        bids,
      },
    };
  };

  return createAction(getTypeOfAction(type), () => makeData(bids))();
};
