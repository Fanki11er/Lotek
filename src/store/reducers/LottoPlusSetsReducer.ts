import { createReducer } from '@reduxjs/toolkit';
import { GET_LOTTO_PLUS_SETS_FROM_DATABASE } from '../actions/lottoSetsActions';
import { lottoSetsReducerInitialState } from '../../utils/types';

const initial: lottoSetsReducerInitialState = {
  sets: [],
};

const lottoPlusSetsReducer = createReducer(initial, {
  [GET_LOTTO_PLUS_SETS_FROM_DATABASE]: (state, action) => {
    const {
      payload: { sets },
    } = action;
    state.sets = sets;
  },
});

export default lottoPlusSetsReducer;
