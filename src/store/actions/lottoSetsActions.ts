import { createAction } from '@reduxjs/toolkit';
import { LottoBidTypes, LottoSet } from '../../utils/types';

export const GET_LOTTO_SETS_FROM_DATABASE: string = 'GET_LOTTO_SETS_FROM_DATABASE';
export const GET_LOTTO_PLUS_SETS_FROM_DATABASE: string = 'GET_LOTTO_PLUS_SETS_FROM_DATABASE';
export const UNKNOWN_TYPE: string = 'UNKNOWN_TYPE';

const getTypeOfAction = (type: LottoBidTypes) => {
  switch (type) {
    case 'lotto': {
      return GET_LOTTO_SETS_FROM_DATABASE;
    }
    case 'lottoPlus': {
      return GET_LOTTO_PLUS_SETS_FROM_DATABASE;
    }
    default: {
      return UNKNOWN_TYPE;
    }
  }
};
export const getSetsFromDatabase = (type: LottoBidTypes, sets: LottoSet[]) => {
  const makeData = (sets: LottoSet[]) => {
    return {
      payload: {
        sets,
      },
    };
  };

  return createAction(getTypeOfAction(type), () => makeData(sets))();
};
