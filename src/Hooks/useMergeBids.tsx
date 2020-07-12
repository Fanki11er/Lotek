import React, { useContext } from 'react';
import { LottoBidTypes } from '../utils/types';
import { LottoBidsContext } from '../Providers/LottoBidsProvider';
import { LottoPlusBidsContext } from '../Providers/LottoPlusBidsProvider';
import { LottoBid } from '../utils/classes';
import { mergeBids } from '../utils/utils';
import { db } from '../Firebase/firebaseConfig';
import { lottoBidsEndpoint, lottoPlusBidsEndpoint } from '../Firebase/baseEndpoints';

const useMergeBids = (bidType: LottoBidTypes, newBids: LottoBid[]) => {
  let type = (null as unknown) as React.Context<unknown>;
  let endpoint = '';
  switch (bidType) {
    case 'lotto': {
      type = LottoBidsContext as React.Context<unknown>;
      endpoint = lottoBidsEndpoint;
      break;
    }
    case 'lottoPlus': {
      type = LottoPlusBidsContext as React.Context<unknown>;
      endpoint = lottoPlusBidsEndpoint;
      break;
    }
    default: {
      break;
    }
  }
  const bids = useContext<unknown>(type) as any;
  const [test]: any = Object.values(bids);

  return () => {
    const mergedArray = mergeBids(test, newBids);

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

export default useMergeBids;
