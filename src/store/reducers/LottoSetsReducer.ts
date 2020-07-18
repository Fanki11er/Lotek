import { createReducer } from '@reduxjs/toolkit';
import { GET_LOTTO_SETS_FROM_DATABASE } from '../actions/lottoSetsActions';
import { lottoSetsReducerInitialState } from '../../utils/types';

const initial: lottoSetsReducerInitialState = {
  sets: [],
};

const lottoSetsReducer = createReducer(initial, {
  [GET_LOTTO_SETS_FROM_DATABASE]: (state, action) => {
    const {
      payload: { sets },
    } = action;
    state.sets = sets;
  },
});

export default lottoSetsReducer;
