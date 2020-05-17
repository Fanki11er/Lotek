import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/GlobalStyle';
import theme from './themes/mainTheme';
import { Provider } from 'react-redux';
import store from './store/store';
import LottoView from './views/LottoView/LottoView';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LottoView />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
