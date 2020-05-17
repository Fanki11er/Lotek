import { createAction } from '@reduxjs/toolkit';
import { LottoBid } from '../../utils/classes';

export const MERGE_LOTTO_BIDS: string = 'MERGE_LOTTO_BIDS';
export const MERGE_LOTTO_PLUS_BIDS: string = 'MERGE_LOTTO_PLUS_BIDS';

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
