import {
  lottoTestStringWithTwoBids,
  stringWithoutBids,
  testBidArray,
  singleLottoBid,
  testList,
  singeLottoBidOb,
  listWithMissingBids,
  mergedBidsArr,
  forCounter,
} from '../utils/mockedData';
import {
  makeArrayOfBids,
  checkForBids,
  getBidProperty,
  makeBidProperty,
  makeLottoBidObj,
  removeSignsFromString,
  removeAllNotNecessarySigns,
  createNewBidsList,
  notExistingBid,
  sortAllBidsArr,
  findMissingBids,
  mergeBids,
  popOldBids,
  countPrimaryNumbers,
  getSelectedNumberOfNumbers,
} from '../utils/utils';

import {
  lottoRegSettings,
  lottoPlusRegSettings,
  idRegExp,
  lottoNumbersRegExp,
  dateRegExp,
  notNecessarySigns,
} from '../utils/regExps';
import { LottoBid } from '../utils/classes';
import { whiteSigns } from '../utils/types';

describe('-- checkForBids', () => {
  test('return bidsArr if there are some bids', () => {
    const bidsArr: RegExpMatchArray | [] = checkForBids(
      lottoTestStringWithTwoBids,
      lottoRegSettings.startConditions,
    );
    expect(bidsArr.length).toBe(2);
  });

  test('return empty array when there are no bids', () => {
    const bidsArr: RegExpMatchArray | [] = checkForBids(
      stringWithoutBids,
      lottoRegSettings.startConditions,
    );
    expect(bidsArr.length).toBe(0);
  });
});

describe('-- makeArrayOfBids', () => {
  test('creates array with "lotto" bids from string', () => {
    const arrayOfLottoBids: string[] = makeArrayOfBids(
      lottoTestStringWithTwoBids,
      lottoRegSettings,
      checkForBids,
    );

    expect(arrayOfLottoBids.length).toBe(2);
  });

  test('creates array with "lotto plus" bids from string', () => {
    const arrayOfLottoPlusBids: string[] = makeArrayOfBids(
      lottoTestStringWithTwoBids,
      lottoPlusRegSettings,
      checkForBids,
    );

    expect(arrayOfLottoPlusBids.length).toBe(2);
  });
});

describe('-- getBidProperty', () => {
  test('get correct id of bid', () => {
    const bid: string = '6409';
    const bidId: boolean = getBidProperty(bid, idRegExp);
    expect(bidId).toBe(true);
  });

  test('return empty string', () => {
    const bid: string = '333';
    const bidId: boolean = getBidProperty(bid, idRegExp);
    const bidNumber: boolean = getBidProperty(bid, lottoNumbersRegExp);

    expect(bidId).toBe(false);
    expect(bidNumber).toBe(false);
  });

  test('return correct number', () => {
    const bid: string = '21';
    const bidNumbers: boolean = getBidProperty(bid, lottoNumbersRegExp);
    expect(bidNumbers).toBe(true);
  });

  test('return correct date', () => {
    const data: string = '01-02-20';
    const dataOfBid: boolean = getBidProperty(data, dateRegExp);
    expect(dataOfBid).toBe(true);
  });
});

describe('-- makeBidProperty', () => {
  test('finds bidId ', () => {
    const [bidId] = makeBidProperty(testBidArray, idRegExp);
    expect(bidId).toBe('6409');
  });

  test('finds numbers', () => {
    const numbers = makeBidProperty(testBidArray, lottoNumbersRegExp);
    expect(numbers).toEqual(['21', '28', '29', '39', '45', '49']);
  });
});

describe('-- makeLottoBidObj', () => {
  test('Creates correct bid object', () => {
    const referenceObj: LottoBid = new LottoBid('6409', '05-05-20', [
      '21',
      '28',
      '29',
      '39',
      '45',
      '49',
    ]);
    const testBidObj: LottoBid = makeLottoBidObj(singleLottoBid);
    expect(testBidObj).toEqual(referenceObj);
  });
});

describe('-- removeSignsFromString', () => {
  test('removes assigned sign from string', () => {
    const testString: string = 'Lotto\t1234 wtorek\nwynik';
    const { tab, space, eol } = whiteSigns;
    expect(removeSignsFromString(testString, tab, space)).toBe('Lotto 1234 wtorek\nwynik');
    expect(removeSignsFromString(testString, eol, space)).toBe('Lotto\t1234 wtorek wynik');
  });
});

describe('-- removeAllNotNecessarySigns', () => {
  test('return cleaned string', () => {
    const testString: string = 'Lotto\t1234 wtorek\nwynik';

    expect(removeAllNotNecessarySigns(testString, notNecessarySigns)).toBe(
      'Lotto 1234 wtorek wynik',
    );
  });
});

describe('-- notExistingBid', () => {
  test('return true if there is not the same id bid', () => {
    const allBidsArr: LottoBid[] = [];
    expect(notExistingBid(allBidsArr, singeLottoBidOb)).toBe(true);
  });

  test('return false if there is the same id bid', () => {
    expect(notExistingBid(testList, singeLottoBidOb)).toBe(false);
  });
});

describe('-- createNewBidsList', () => {
  test('create new uniq list of bids when arr is empty', () => {
    const allBidsArr: LottoBid[] = [];
    expect(
      createNewBidsList(lottoTestStringWithTwoBids, lottoRegSettings, allBidsArr, checkForBids),
    ).toEqual(testList);
  });
});

describe('-- sortAllBidsArr', () => {
  test('sorts from oldest to newest bid by id', () => {
    const reversedList = [...testList].reverse();
    expect(sortAllBidsArr(reversedList)).toEqual(testList);
  });
});

describe('-- findMissingBids', () => {
  test('return array of missing bids id', () => {
    expect(findMissingBids(listWithMissingBids)).toEqual([6410, 6409]);
  });
});

describe('-- popOldBids', () => {
  test('pops assigned number of bids', () => {
    const listToPop = [...testList];
    popOldBids(listToPop, 1);
    expect(listToPop.length).toBe(1);
    expect(listToPop).toEqual([
      {
        bidId: '6409',
        bidDate: '05-05-20',
        gameName: 'Lotto',
        numbers: ['21', '28', '29', '39', '45', '49'],
      },
    ]);
  });
});

describe('-- mergeBids', () => {
  const newBid = [new LottoBid('6410', '06-05-20', ['11', '16', '25', '38', '42', '44'])];
  test('merges allBidsArr with newBids, checks if there is not to many bids', () => {
    expect(mergeBids(testList, newBid, 2)).toEqual(mergedBidsArr);
  });
});

describe('--countPrimaryNumbers', () => {
  test('counts numbers from bids and return object with stats', () => {
    const counter: [string, number][] = countPrimaryNumbers(forCounter, 49, 5);
    expect(counter[0][1]).toBe(2);
    expect(counter[1][1]).toBe(1);
    expect(counter[2][1]).toBe(1);
    expect(counter[48][1]).toBe(0);
  });
});

describe('--getSelectedNumberOfNumbers', () => {
  test('returns ordered length of array', () => {
    const counter: [string, number][] = countPrimaryNumbers(forCounter, 49, 5);
    expect(getSelectedNumberOfNumbers(10, counter).length).toBe(10);
    expect(getSelectedNumberOfNumbers(20, counter).length).toBe(20);
    expect(getSelectedNumberOfNumbers(50, counter).length).toBe(49);
  });
});
