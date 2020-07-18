import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState, LottoSetsContext as LottoSetsContextInterface, LottoSet } from '../utils/types';

export const LottoSetsContext: React.Context<LottoSetsContextInterface> = createContext({
  lottoSets: [] as LottoSet[] | [],
});

const LottoSetsProvider = (props: React.Props<any>) => {
  const { children } = props;
  const selectLottoSets = (state: RootState) => state.lottoSets.sets;

  const lottoSets = useSelector(selectLottoSets);
  const context = {
    lottoSets,
  };
  return <LottoSetsContext.Provider value={context}>{children}</LottoSetsContext.Provider>;
};

export default LottoSetsProvider;
