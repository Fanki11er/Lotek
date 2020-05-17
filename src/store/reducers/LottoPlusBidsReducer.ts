import { createReducer } from '@reduxjs/toolkit';
import { MERGE_LOTTO_PLUS_BIDS } from '../actions/lottoBidsActions';
import { mergeBids } from '../../utils/utils';
import { lottoReducerInitialState } from '../../utils/types';

const initial: lottoReducerInitialState = {
  bids: [],
  numbersStats: [],
};

const lottoPlusBidsReducer = createReducer(initial, {
  [MERGE_LOTTO_PLUS_BIDS]: (state, action) => {
    const {
      payload: { newBids },
    } = action;

    state.bids = mergeBids(state.bids, newBids);
  },
});

export default lottoPlusBidsReducer;
