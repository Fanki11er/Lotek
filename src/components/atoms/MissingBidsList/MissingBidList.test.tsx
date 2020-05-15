import React from 'react';
import MissingBidsList from './MissingBidsList';
import { renderWithTheme } from '../../../utils/testUtils';

describe('<MissingBidsList />', () => {
  test('with dotColor props has color from prop', () => {
    const { queryAllByTestId } = renderWithTheme(
      <MissingBidsList elements={[1234, 5678]} dotColor={'red'} />,
    );
    expect(queryAllByTestId('test-li')[0]).toBeInTheDocument();
    expect(queryAllByTestId('test-li')[0]).toHaveAttribute('color');
    expect(queryAllByTestId('test-li')[0].getAttribute('color')).toBe('red');
  });

  test('there are no li elements when arr is empty', () => {
    const { queryByTestId } = renderWithTheme(<MissingBidsList elements={[]} />);
    expect(queryByTestId('test-li')).not.toBeInTheDocument();
  });
});
