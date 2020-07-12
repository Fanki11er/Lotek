import { RegexObj, whiteSigns } from './types';

export const idRegExp = /^\d{4,}$/;
export const lottoNumbersRegExp: RegExp = /^\d{1,2}$/m;

export const lottoRegSettings: RegexObj = {
  startConditions: [/Lotto losowanie nr \d+/gi, /Lotto\s+\d+/gi],
  endCondition: 'Lotto',
};

export const lottoPlusRegSettings: RegexObj = {
  startConditions: [/Lotto Plus losowanie nr \d+/gi, /Lotto Plus\s+\d+/gi],
  endCondition: 'Super',
};

export const dateRegExp: RegExp = /^\d{2}[.]\d{2}[.]\d{4}$/;

export const notNecessarySigns: whiteSigns[] = [whiteSigns.coma, whiteSigns.eol, whiteSigns.tab];
