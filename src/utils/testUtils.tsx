import React, { ReactChild, Children } from 'react';
import { render } from '@testing-library/react';
import theme from '../themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import store from '../store/store';
import { Provider } from 'react-redux';

export const testStore = Object.assign({}, store);

export const renderWithTheme = (children: ReactChild) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithStore = (children: ReactChild) => {
  return render(
    <Provider store={testStore}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>,
  );
};
