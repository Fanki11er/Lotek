import React, { ReactChild } from 'react';
import { render } from '@testing-library/react';
import theme from '../themes/mainTheme';
import { ThemeProvider } from 'styled-components';

export const renderWithTheme = (children: ReactChild) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
