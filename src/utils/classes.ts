import { lottoBidObj } from './types';

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
