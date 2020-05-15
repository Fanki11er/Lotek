export const lottoTestStringWithTwoBids: string = `Ostatnie wyniki
Gra	Numer
losowania	Data	Liczby | Sortuj wyniki wg kolejności losowania
Lotto	6409	05-05-20, wtorek	
21
28
29
39
45
49
Lotto Plus	6409	05-05-20, wtorek 	
17
26
30
42
48
49
Super Szansa	2858	05-05-20, wtorek 	
7
7
9
5
0
4
6
 
Lotto	6408	02-05-20, sobota	
11
16
25
38
42
44
Lotto Plus	6408	02-05-20, sobota 	
8
18
25
31
32
43
Super Szansa	2852	02-05-20, sobota 	
3
4
0
6
9
6
5
`;

export const stringWithoutBids: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend leo eu erat sagittis tincidunt. Nulla gravida dignissim nulla, nec molestie nibh. Nullam nec nisi at elit sodales efficitur. Sed scelerisque mauris sed eros maximus, ac maximus dui consequat.';

export const singleLottoBid: string = 'Lotto	6409	05-05-20, wtorek	21 28 29 39 45 49';

export const testBidArray: string[] = [
  'Lotto',
  '6409',
  '05-05-20,',
  'wtorek',
  '21',
  '28',
  '29',
  '39',
  '45',
  '49',
];

export const testList = [
  {
    bidId: '6409',
    bidDate: '05-05-20',
    gameName: 'Lotto',
    numbers: ['21', '28', '29', '39', '45', '49'],
  },
  {
    bidId: '6408',
    bidDate: '02-05-20',
    gameName: 'Lotto',
    numbers: ['11', '16', '25', '38', '42', '44'],
  },
];

export const listWithMissingBids = [
  {
    bidId: '6408',
    bidDate: '02-05-20',
    gameName: 'Lotto',
    numbers: ['11', '16', '25', '38', '42', '44'],
  },
  {
    bidId: '6411',
    bidDate: '05-05-20',
    gameName: 'Lotto',
    numbers: ['21', '28', '29', '39', '45', '49'],
  },
];

export const singeLottoBidOb = {
  bidId: '6408',
  bidDate: '02-05-20',
  gameName: 'Lotto',
  numbers: ['11', '16', '25', '38', '42', '44'],
};

export const mergedBidsArr = [
  {
    bidId: '6410',
    bidDate: '06-05-20',
    gameName: 'Lotto',
    numbers: ['11', '16', '25', '38', '42', '44'],
  },
  {
    bidId: '6409',
    bidDate: '05-05-20',
    gameName: 'Lotto',
    numbers: ['21', '28', '29', '39', '45', '49'],
  },
];
