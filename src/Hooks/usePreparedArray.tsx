import React, { useMemo, useEffect, useState } from 'react';
import { countPrimaryNumbers, getSelectedNumberOfNumbers } from '../utils/utils';
import { LottoBid } from '../utils/classes';

const usePreparedArray = (
  numbersList: LottoBid[] | [],
  bidsNumber: number,
  numberOfNumbers: number,
  maxNumbers: number = 49,
) => {
  const [preparedArray, setPreparedArray] = useState<[string, number][] | []>([]);

  const countedList = useMemo(() => {
    return countPrimaryNumbers(numbersList, maxNumbers, bidsNumber);
  }, [numbersList, bidsNumber]);

  useEffect(() => {
    countedList.length
      ? setPreparedArray(getSelectedNumberOfNumbers(numberOfNumbers, countedList))
      : setPreparedArray([]);
  }, [countedList, numberOfNumbers]);

  return preparedArray;
};

export default usePreparedArray;
