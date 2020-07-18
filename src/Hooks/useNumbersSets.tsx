import React, { useContext } from 'react';
import { LottoBidTypes } from '../utils/types';
import { LottoSetsContext } from '../Providers/LottoSetsProvider';
import { LottoPlusSetsContext } from '../Providers/LottoPlusSetsProvider';
import { mergeSets } from '../utils/utils';
import { db } from '../Firebase/firebaseConfig';
import { lottoSetsEndpoint, lottoPlusSetsEndpoint } from '../Firebase/baseEndpoints';
import { LottoSet } from '../utils/classes';

const useNumbersSets = (bidType: LottoBidTypes, newSet: string[]) => {
  let type = (null as unknown) as React.Context<unknown>;
  let endpoint = '';
  switch (bidType) {
    case 'lotto': {
      type = LottoSetsContext as React.Context<unknown>;
      endpoint = lottoSetsEndpoint;
      break;
    }
    case 'lottoPlus': {
      type = LottoPlusSetsContext as React.Context<unknown>;
      endpoint = lottoPlusSetsEndpoint;
      break;
    }
    default: {
      break;
    }
  }
  const numbersSets = useContext<unknown>(type) as any;

  const [setsArr]: any = Object.values(numbersSets);

  return () => {
    const mergedArray = mergeSets(setsArr, new LottoSet(newSet, bidType));
    mergedArray.length &&
      db
        .ref(endpoint)
        .set(mergedArray)
        .then(() => {
          console.log('Completed');
        })
        .catch((err) => {
          console.log('Error', err);
        });
  };
};

export default useNumbersSets;
