import { createReducer } from '@reduxjs/toolkit';
import { GET_LOTTO_BIDS_FROM_DATABASE } from '../actions/lottoBidsActions';
//import { mergeBids } from '../../utils/utils';
import { lottoReducerInitialState } from '../../utils/types';

const initial: lottoReducerInitialState = {
  bids: [],
  numbersStats: [],
};

const lottoBidsReducer = createReducer(initial, {
  // [MERGE_LOTTO_BIDS]: (state, action) => {
  // const {
  // payload: { newBids },
  // } = action;

  // state.bids = mergeBids(state.bids, newBids);
  // },
  [GET_LOTTO_BIDS_FROM_DATABASE]: (state, action) => {
    const {
      payload: { bids },
    } = action;
    state.bids = bids;
  },
});

export default lottoBidsReducer;
