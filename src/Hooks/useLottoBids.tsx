import { useState, useContext, useEffect } from 'react';
import { LottoBidsContext } from '../Providers/LottoBidsProvider';
import { LottoPlusBidsContext } from '../Providers/LottoPlusBidsProvider';
import { createNewBidsList, findMissingBids, checkForBids } from '../utils/utils';
import { lottoPlusRegSettings, lottoRegSettings } from '../utils/regExps';
import { bidsTypes } from '../utils/types';
import { LottoBid } from '../utils/classes';

const useLottoBids = () => {
  const initialArray: LottoBid[] = [];
  const initialMissingBidsArr: number[] = [];
  const { lotto, lottoPlus } = bidsTypes;

  const getBidsList = (plainString: string) => {
    setNewLottoBidsList(createNewBidsList(plainString, lottoRegSettings, lottoBids, checkForBids));
    setNewLottoPlusBidsList(
      createNewBidsList(plainString, lottoPlusRegSettings, lottoPlusBids, checkForBids),
    );
  };

  const resetBids = (type: string) => {
    if (type === lotto) {
      setNewLottoBidsList(initialArray);
      //findMissingBids(lottoBids);
    }
    if (type === lottoPlus) {
      setNewLottoPlusBidsList(initialArray);
      //findMissingBids(lottoPlusBids);
    }
  };

  const [missingLottoBids, setMissingLottoBids] = useState(initialMissingBidsArr);
  const [missingLottoPlusBids, setMissingLottoPlusBids] = useState(initialMissingBidsArr);

  const [newLottoBidsList, setNewLottoBidsList] = useState(initialArray);
  const [newLottoPlusBidsList, setNewLottoPlusBidsList] = useState(initialArray);

  const { lottoBids } = useContext(LottoBidsContext);
  const { lottoPlusBids } = useContext(LottoPlusBidsContext);

  useEffect(() => {
    setMissingLottoBids(findMissingBids(lottoBids));
  }, [lottoBids]);

  useEffect(() => {
    setMissingLottoPlusBids(findMissingBids(lottoPlusBids));
  }, [lottoPlusBids]);
  return {
    missingLottoBids,
    missingLottoPlusBids,
    newLottoBidsList,
    newLottoPlusBidsList,
    resetBids,
    getBidsList,
  };
};

export default useLottoBids;
