import { RegexObj, whiteSigns, lottoBidObj } from './types';
import { LottoBid } from './classes';
import { idRegExp, dateRegExp, lottoNumbersRegExp, notNecessarySigns } from './regExps';
export const checkForBids = (
  content: string,
  conditions: string[] | RegExp[],
): RegExpMatchArray | [] => {
  let bidsList: RegExpMatchArray | null = [];
  let i: number = 0;

  while (!bidsList || i < conditions.length) {
    bidsList = content.match(conditions[i]) ? content.match(conditions[i]) : [];
    i++;
  }

  return bidsList ? bidsList : [];
};

export const makeArrayOfBids = (
  plainContent: string,
  settings: RegexObj,
  matchFunc: Function,
): string[] => {
  const content: string = plainContent;
  const arrOfBids: string[] = [];
  const { startConditions, endCondition } = settings;
  let startIndex: number;
  let endIndex: number;

  const bidsList: RegExpMatchArray | [] = matchFunc(content, startConditions);

  bidsList.length &&
    bidsList.forEach((bid) => {
      startIndex = content.indexOf(bid);
      endIndex = content.indexOf(endCondition, startIndex + 1);
      arrOfBids.unshift(content.slice(startIndex, endIndex));
    });
  return arrOfBids;
};

export const getBidProperty = (bid: string, regExp: RegExp): boolean => {
  const result: RegExpMatchArray | null = bid.match(regExp);
  return result ? true : false;
};

export const makeBidProperty = (
  bidArray: string[],
  regExp: RegExp,
  flat: boolean = true,
): string[] => {
  const property = bidArray.filter((value) => {
    return getBidProperty(value, regExp);
  });
  if (property.length === 1) return property;
  else if (property.length > 1) return property.flat();
  else return [''];
};

export const removeSignsFromString = (
  string: string,
  signToRemove: whiteSigns,
  swapTo: whiteSigns,
): string => {
  return string.includes(signToRemove) ? string.split(signToRemove).join(swapTo) : string;
};

export const removeAllNotNecessarySigns = (string: string, signsToRemove: whiteSigns[]): string => {
  let result = string;
  const { space } = whiteSigns;
  signsToRemove.forEach((sign) => {
    result = removeSignsFromString(result, sign, space);
  });
  return result;
};

export const makeLottoBidObj = (bid: string): LottoBid => {
  let processBid: string = bid;
  processBid = removeAllNotNecessarySigns(processBid, notNecessarySigns);
  const bidArr = processBid.split(' ');

  const [bidId] = makeBidProperty(bidArr, idRegExp);
  const [bidDate] = makeBidProperty(bidArr, dateRegExp);
  const bidNumbers = makeBidProperty(bidArr, lottoNumbersRegExp);
  return new LottoBid(bidId, bidDate, bidNumbers);
};

export const notExistingBid = (allBidsArr: lottoBidObj[], testedBid: lottoBidObj): boolean => {
  let result = true;
  allBidsArr.forEach(({ bidId }) => {
    if (testedBid.bidId === bidId) {
      result = false;
    }
  });
  return result;
};

export const createNewBidsList = (
  plainContent: string,
  settings: RegexObj,
  allBidsArr: lottoBidObj[],
  matchFunc: Function,
): lottoBidObj[] => {
  const resultArr: lottoBidObj[] = [];
  const bidsArr = makeArrayOfBids(plainContent, settings, matchFunc);
  bidsArr.forEach((bid) => {
    const newBid = makeLottoBidObj(bid);
    if (notExistingBid(allBidsArr, newBid)) {
      resultArr.unshift(newBid);
    }
  });
  return resultArr;
};

export const sortAllBidsArr = (allBidsArr: lottoBidObj[]): lottoBidObj[] => {
  return allBidsArr.sort((firstBid, secondBid) => {
    return Number(secondBid.bidId) - Number(firstBid.bidId);
  });
};

export const findMissingBids = (allBidsArr: lottoBidObj[]): number[] => {
  const missingBids: number[] = [];
  let startBidId = Number(allBidsArr[0].bidId);
  const lastIndex = allBidsArr.length - 1;
  const lastBid = Number(allBidsArr[lastIndex].bidId);
  const difference = lastBid - startBidId;

  if (difference + lastIndex !== allBidsArr.length && allBidsArr.length) {
    for (let i = 0, j = startBidId; i < difference + lastIndex; i++, j++) {
      const missing = allBidsArr.filter(({ bidId }) => {
        return Number(bidId) === j;
      });

      if (!missing.length) missingBids.push(j);
    }
  }
  return missingBids;
};

export const popOldBids = (bidsArr: lottoBidObj[], bidsToPop: number) => {
  for (let i = 0; i < bidsToPop; i++) bidsArr.pop();
};

export const mergeBids = (
  allBidsArr: lottoBidObj[],
  newBids: lottoBidObj[],
  arrSize?: number,
): lottoBidObj[] => {
  const processArr = [...allBidsArr];
  const maxLength = arrSize ? arrSize : 100;
  const lengthDifference = allBidsArr.length + newBids.length - maxLength;
  if (lengthDifference > 0) popOldBids(processArr, lengthDifference);
  newBids.reverse();
  newBids.forEach((bid) => {
    processArr.unshift(bid);
  });
  return sortAllBidsArr(processArr);
};
