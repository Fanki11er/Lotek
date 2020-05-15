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
  };

  fontSizeMobile: {};
};

export type bidColorSchema = {
  mainColor: string;
  secondColor: string;
};
