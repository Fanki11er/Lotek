import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState, LottoBidsContext as LottoBidsContextInterface } from '../utils/types';
import { LottoBid } from '../utils/classes';

export const LottoBidsContext: React.Context<LottoBidsContextInterface> = createContext({
  lottoBids: [] as LottoBid[] | [],
});

const LottoBidsProvider = (props: React.Props<any>) => {
  const { children } = props;
  const selectLottoBids = (state: RootState) => state.lottoBids.bids;
  const lottoBids = useSelector(selectLottoBids);
  const context = {
    lottoBids,
  };
  return <LottoBidsContext.Provider value={context}>{children}</LottoBidsContext.Provider>;
};

export default LottoBidsProvider;
