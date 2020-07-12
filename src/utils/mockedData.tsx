export const lottoTestStringWithTwoBids: string = `Ostatnie wyniki
Gra	Numer
losowania	Data	Liczby | Sortuj wyniki wg kolejności losowania
Lotto	6409	05.05.2020, wtorek	
21
28
29
39
45
49
Lotto Plus	6409	05.05.2020, wtorek 	
17
26
30
42
48
49
Super Szansa	2858	05.05.2020, wtorek 	
7
7
9
5
0
4
6
 
Lotto	6408	02.05.2020, sobota	
11
16
25
38
42
44
Lotto Plus	6408	02.05.2020, sobota 	
8
18
25
31
32
43
Super Szansa	2852	02.05.2020, sobota 	
3
4
0
6
9
6
5
`;

export const lottoTestStringWithTwoBidsOneRepeat: string = `Ostatnie wyniki
Gra	Numer
losowania	Data	Liczby | Sortuj wyniki wg kolejności losowania
Lotto	6410	05.05.2020, wtorek	
21
28
29
39
45
49
Lotto Plus	6409	05.05.2020, wtorek 	
17
26
30
42
48
49
Super Szansa	2858	05.05.2020, wtorek 	
7
7
9
5
0
4
6
 
Lotto	6409	02.05.2020, sobota	
11
16
25
38
42
44
Lotto Plus	6408	02.05.2020, sobota 	
8
18
25
31
32
43
Super Szansa	2852	02.05.2020, sobota 	
3
4
0
6
9
6
5
`;

export const lottoTestStringWithThreeBids = `
Gra	Numer
losowania	Data	Liczby | Sortuj wyniki wg kolejności losowania
Lotto	6414	16.05.2020, sobota	
1
9
17
30
31
38
Lotto Plus	6414	16.05.2020, sobota 	
10
15
26
28
37
40
Super Szansa	2880	16.05.2020, sobota 	
5
3
8
3
5
4
5
 
Lotto	6413	14.05.2020, czwartek	
6
23
37
41
43
46
Lotto Plus	6413	14.05.2020, czwartek 	
3
8
11
12
21
33
Super Szansa	2876	14.05.2020, czwartek 	
4
4
6
2
5
5
2
 
Lotto	6412	12.05.2020, wtorek	
1
18
27
34
38
46
Lotto Plus	6412	12.05.2020, wtorek 	
4
18
27
35
46
49
Super Szansa	2872	12.05.2020, wtorek 	
2
6
0
5
4
3
6
`;

export const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac scelerisque libero. Nunc nisi enim, malesuada elementum mattis at, posuere ut sapien. Vestibulum id massa elementum, posuere orci in, molestie massa. Donec eros mi, dapibus in pharetra at, luctus vitae purus. Suspendisse ac efficitur mi. Aliquam nisi lectus, volutpat eu felis sed, tristique pretium sapien. Quisque lacinia nisi sed sollicitudin interdum. Vestibulum felis tellus, placerat sit amet felis non, imperdiet fermentum nunc.';

export const stringWithoutBids: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend leo eu erat sagittis tincidunt. Nulla gravida dignissim nulla, nec molestie nibh. Nullam nec nisi at elit sodales efficitur. Sed scelerisque mauris sed eros maximus, ac maximus dui consequat.';

export const singleLottoBid: string = 'Lotto	6409	05.05.2020, wtorek	21 28 29 39 45 49';

export const testBidArray: string[] = [
  'Lotto',
  '6409',
  '05.05.2020,',
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
    bidDate: '05.05.2020',
    gameName: 'Lotto',
    numbers: ['21', '28', '29', '39', '45', '49'],
  },
  {
    bidId: '6408',
    bidDate: '02.05.2020',
    gameName: 'Lotto',
    numbers: ['11', '16', '25', '38', '42', '44'],
  },
];

export const listWithMissingBids = [
  {
    bidId: '6411',
    bidDate: '05.05.2020',
    gameName: 'Lotto',
    numbers: ['21', '28', '29', '39', '45', '49'],
  },
  {
    bidId: '6408',
    bidDate: '02.05.2020',
    gameName: 'Lotto',
    numbers: ['11', '16', '25', '38', '42', '44'],
  },
];

export const singeLottoBidOb = {
  bidId: '6408',
  bidDate: '02.05.2020',
  gameName: 'Lotto',
  numbers: ['11', '16', '25', '38', '42', '44'],
};

export const mergedBidsArr = [
  {
    bidId: '6410',
    bidDate: '06.05.2020',
    gameName: 'Lotto',
    numbers: ['11', '16', '25', '38', '42', '44'],
  },
  {
    bidId: '6409',
    bidDate: '05.05.2020',
    gameName: 'Lotto',
    numbers: ['21', '28', '29', '39', '45', '49'],
  },
];

export const forCounter = [
  {
    bidId: '6410',
    bidDate: '06.05.2020',
    gameName: 'Lotto',
    numbers: ['11', '16', '25', '38', '42', '44'],
  },
  {
    bidId: '6409',
    bidDate: '05.05.2020',
    gameName: 'Lotto',
    numbers: ['11', '28', '29', '39', '45', '49'],
  },
];

/*export const testLuckySixArr = [
  {
    ballNumber: '40',
    quantity: 8,
  },
  {
    ballNumber: '30',
    quantity: 8,
  },
  {
    ballNumber: '35',
    quantity: 6,
  },
  {
    ballNumber: '17',
    quantity: 5,
  },
  {
    ballNumber: '19',
    quantity: 5,
  },
  {
    ballNumber: '9',
    quantity: 4,
  },
  {
    ballNumber: '15',
    quantity: 4,
  },
  {
    ballNumber: '1',
    quantity: 4,
  },
  {
    ballNumber: '49',
    quantity: 3,
  },
];*/

export const testLuckySixArr = [
  ['40', 8],
  ['30', 8],
  ['35', 6],
  ['17', 5],
  ['19', 5],
  ['9', 4],
  ['15', 4],
  ['1', 4],
  ['49', 3],
];
