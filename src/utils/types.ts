import store from '../store/store';
import { LottoBid } from './classes';
export enum whiteSigns {
  tab = '\t',
  eol = '\n',
  space = ' ',
  coma = ',',
}

export interface lottoBidObj {
  bidId: string;
  bidDate: string;
  gameName: string;
  numbers: string[];
}

export interface RegexObj {
  startConditions: string[] | RegExp[];
  endCondition: string;
}

export type themeColor = {
  theme: string;
  color: string;
};

export type mainTheme = {
  primary: string;
  lottoYellow: string;
  lottoPlusBlue: string;
  green: string;
  blue: string;
  lightRed: string;
  transparentGreen: string;
  transparentLottoYellow: string;
  transparentBlue: string;
  gray: string;
  orange: string;
  transparentGray: string;

  fontSizeDesktop: {
    smaller: string;
    normal: string;
    larger: string;
    large: string;
  };

  fontSizeMobile: {};
};

export type bidColorSchema = {
  mainColor: string;
  secondColor: string;
};

export type lottoReducerInitialState = {
  bids: LottoBid[];
  numbersStats: number[];
};

export type RootState = ReturnType<typeof store.getState>;

export enum bidsTypes {
  lotto = 'lotto',
  lottoPlus = 'lottoPlus',
}

export type SingleNumbersStats = {
  ballNumber: number;
  quantity: number;
};

export type LottoBidTypes = 'lotto' | 'lottoPlus';

export interface LottoBidsContext {
  lottoBids: LottoBid[] | [];
}

export interface LottoPlusBidsContext {
  lottoPlusBids: LottoBid[] | [];
}
