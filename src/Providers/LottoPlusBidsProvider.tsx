import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState, LottoPlusBidsContext as LottoPlusBidsContextInterface } from '../utils/types';
import { LottoBid } from '../utils/classes';

export const LottoPlusBidsContext: React.Context<LottoPlusBidsContextInterface> = createContext({
  lottoPlusBids: [] as LottoBid[] | [],
});

const LottoPlusBidsProvider = (props: React.Props<any>) => {
  const { children } = props;
  const selectLottoPlusBids = (state: RootState) => state.lottoPlusBids.bids;
  const lottoPlusBids = useSelector(selectLottoPlusBids);
  const context = {
    lottoPlusBids,
  };
  return <LottoPlusBidsContext.Provider value={context}>{children}</LottoPlusBidsContext.Provider>;
};

export default LottoPlusBidsProvider;
