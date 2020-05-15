import React from 'react';
import TestComponent from './components/TestComponent/TestComponent';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/GlobalStyle';
import theme from './themes/mainTheme';
import LottoView from './views/LottoView/LottoView';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LottoView />
      </ThemeProvider>
    </>
  );
}

export default App;
