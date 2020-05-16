import { mainTheme, bidColorSchema } from '../utils/types';

const theme: mainTheme = {
  primary: '#010D26',
  lottoYellow: '#FFC314',
  lottoPlusBlue: '#01A0E2',
  green: '#83B33B',
  blue: '#2B6EFF',
  lightRed: '#D94863',
  transparentGreen: 'rgba(131, 179, 59, 0.1)',
  transparentLottoYellow: 'rgba(255, 195, 20, 0.18)',
  transparentBlue: 'rgba(1,160, 226, 0.1)',
  gray: '#A1A1A1',
  transparentGray: 'rgba(54, 53, 53, 0.7)',
  orange: '#FF8C00',

  fontSizeDesktop: {
    smaller: '0.8em',
    normal: '1em',
    larger: '1.3em',
  },

  fontSizeMobile: {},
};

export default theme;

export const lottoColorSchema: bidColorSchema = {
  mainColor: theme.lottoYellow,
  secondColor: 'black',
};

export const lottoPlusColorSchema: bidColorSchema = {
  mainColor: theme.lottoPlusBlue,
  secondColor: 'black',
};
