import { lottoBidObj, LottoSet as LottoSetInterface, LottoBidTypes } from './types';

export class LottoBid implements lottoBidObj {
  bidId: string;
  bidDate: string;
  numbers: string[];
  gameName: string;
  constructor(bidId: string, bidDate: string, numbers: string[], gameName: string = 'Lotto') {
    this.bidId = bidId;
    this.bidDate = bidDate;
    this.numbers = numbers;
    this.gameName = gameName;
  }
}

export class LottoSet implements LottoSetInterface {
  createDate: string;
  id: string;
  constructor(public numbers: string[], public type: LottoBidTypes) {
    this.createDate = new Date().toLocaleDateString();
    this.id = `${this.numbers.join('')}${type}`;
  }
}
