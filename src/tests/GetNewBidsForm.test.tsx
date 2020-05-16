import React from 'react';
import { renderWithTheme } from '../utils/testUtils';
import { fireEvent } from '@testing-library/react';
import GetNewBidsForm from '../components/molecules/GetNewBidsForm/GetNewBidsForm';
import { loremIpsum } from '../utils/mockedData';

describe('<GetNewBidsForm />', () => {
  test('sends input value when submit', () => {
    const getList = jest.fn();
    const { queryByTestId } = renderWithTheme(<GetNewBidsForm getList={getList} />);
    const submitButton: any = queryByTestId('submit-button');
    const input: any = queryByTestId('plain-input');

    expect(input).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(input, { target: { value: loremIpsum } });
    fireEvent.click(submitButton);

    expect(getList).toHaveBeenCalledTimes(1);
    expect(getList).toBeCalledWith(loremIpsum);
  });
});
