import { useState } from 'react';

const usePreparatoryValue = (initialBidsValue: number, initialNumbersValue: number) => {
  const [bidsNumber, setBidsNumber] = useState(initialBidsValue);
  const [numbersNumber, setNumbersNumber] = useState(initialNumbersValue);

  const getFormValues = (bidsNumber: number, numbersNumber: number) => {
    setBidsNumber(bidsNumber);
    setNumbersNumber(numbersNumber);
  };
  return { bidsNumber, numbersNumber, getFormValues };
};

export default usePreparatoryValue;
