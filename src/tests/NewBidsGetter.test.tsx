import React from 'react';
import NewBidGetter from '../components/organisms/NewBidsGetter/NewBidsGetter';
import { fireEvent, waitForElement } from '@testing-library/react';
import { renderWithStore } from '../utils/testUtils';
import {
  lottoTestStringWithTwoBids,
  loremIpsum,
  lottoTestStringWithThreeBids,
  lottoTestStringWithTwoBidsOneRepeat,
} from '../utils/mockedData';
import { testStore } from '../utils/testUtils';

describe('<NewBidsGetter />', () => {
  test('shows list of new bids if there are some in the string taken by input', () => {
    const { queryByTestId, queryAllByTestId } = renderWithStore(<NewBidGetter />);
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
    const { queryByTestId, queryAllByTestId } = renderWithStore(<NewBidGetter />);
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

describe('<NewBidsGetter /> with store', () => {
  test('adds bids to  empty  store', () => {
    const { queryByTestId, queryAllByTestId } = renderWithStore(<NewBidGetter />);
    const lottoAllBids = testStore.getState().lottoBids.bids;
    const submitButton: any = queryByTestId('submit-button');
    const [addButton]: any = queryAllByTestId('add-button');
    const input: any = queryByTestId('plain-input');
    const addBids = (mockValue: string) => {
      fireEvent.change(input, { target: { value: mockValue } });
      fireEvent.click(submitButton);
      fireEvent.click(addButton);
    };

    expect(lottoAllBids).toEqual([]);
    expect(submitButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();

    addBids(lottoTestStringWithTwoBids);
    expect(testStore.getState().lottoBids.bids.length).toBe(2);
    setTimeout(() => {
      addBids(lottoTestStringWithTwoBids);
      expect(testStore.getState().lottoBids.bids.length).toBe(2);
    }, 100);

    setTimeout(() => {
      addBids(lottoTestStringWithTwoBidsOneRepeat);
      expect(testStore.getState().lottoBids.bids.length).toBe(3);
    }, 100);
  });
});
