import React from 'react';
import NewBidGetter from '../components/organisms/NewBidsGetter/NewBidsGetter';
import { fireEvent, waitForElement } from '@testing-library/react';
import { renderWithTheme } from '../utils/testUtils';
import { lottoTestStringWithTwoBids, loremIpsum } from '../utils/mockedData';

describe('<NewBidsGetter />', () => {
  test('shows list of new bids if there are some in the string taken by input', () => {
    const { queryByTestId, queryAllByTestId } = renderWithTheme(<NewBidGetter />);
    const input: any = queryByTestId('plain-input');
    const submitButton: any = queryByTestId('submit-button');
    const [list] = queryAllByTestId('new-bids-list');
    const infDives = queryAllByTestId('info-div');

    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(list).toBe(undefined);
    expect(infDives.length).toBe(2);

    //? Add content to input
    fireEvent.change(input, { target: { value: lottoTestStringWithTwoBids } });

    //? Check if content is in input
    expect(input.value).toBe(lottoTestStringWithTwoBids);

    //? Click button
    fireEvent.click(submitButton);

    waitForElement(() => {
      expect(infDives.length).toBe(1);
      expect(list).toBeInTheDocument();

      //? Check if list has bids found in the string (2);
      expect(list.childElementCount).toBe(2);
    });

    //? Check if list has bids found in the string (2);

    //? Input is cleaned
    expect(input.value).toBe('');
  });

  test('shows empty list of new bids if there are no bids in the string taken by input', () => {
    const { queryByTestId, queryAllByTestId } = renderWithTheme(<NewBidGetter />);
    const input: any = queryByTestId('plain-input');
    const submitButton: any = queryByTestId('submit-button');
    const [list] = queryAllByTestId('new-bids-list');
    const infDives = queryAllByTestId('info-div');

    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(list).toBe(undefined);
    expect(infDives.length).toBe(2);

    //? Add content to input
    fireEvent.change(input, { target: { value: loremIpsum } });

    //? Check if content is in input
    expect(input.value).toBe(loremIpsum);

    //? Click button
    fireEvent.click(submitButton);
    waitForElement(() => {
      expect(list).toBe(undefined);
      expect(infDives.length).toBe(2);
    });

    //? Input is cleaned
    expect(input.value).toBe('');
  });
});
