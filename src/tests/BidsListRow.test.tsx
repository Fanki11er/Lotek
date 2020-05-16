import React from 'react';
import { renderWithTheme } from '../utils/testUtils';
import BidsListRow from '../components/molecules/BidsListRow/BidListRow';
import { lottoColorSchema } from '../themes/mainTheme';
import { singeLottoBidOb } from '../utils/mockedData';

describe('<BidsListRow />', () => {
  test('renders given bid', () => {
    const { queryByTestId } = renderWithTheme(
      <BidsListRow bid={singeLottoBidOb} schema={lottoColorSchema} />,
    );
    const { bidId, bidDate } = singeLottoBidOb;
    const bidNumbers = queryByTestId('bid-numbers');
    const label = queryByTestId('bid-label');
    expect(bidNumbers).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label && label.textContent).toBe(`${bidId} ${bidDate}`);
    expect(bidNumbers?.childElementCount).toBe(6);
  });
});
