import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import {
  RootState,
  LottoPlusSetsContext as LottoPlusSetsContextInterface,
  LottoSet,
} from '../utils/types';

export const LottoPlusSetsContext: React.Context<LottoPlusSetsContextInterface> = createContext({
  lottoPlusSets: [] as LottoSet[] | [],
});

const LottoPlusSetsProvider = (props: React.Props<any>) => {
  const { children } = props;
  const selectLottoPlusSets = (state: RootState) => state.lottoPlusSets.sets;
  const lottoPlusSets = useSelector(selectLottoPlusSets);
  const context = {
    lottoPlusSets,
  };
  return <LottoPlusSetsContext.Provider value={context}>{children}</LottoPlusSetsContext.Provider>;
};

export default LottoPlusSetsProvider;
