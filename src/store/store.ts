import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import lottoBidsReducer from './reducers/LottoBidsReducer';
import lottoPlusBidsReducer from '../store/reducers/LottoPlusBidsReducer';
import appStateReducer from './reducers/appStateReducer';

const customMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    lottoBids: lottoBidsReducer,
    lottoPlusBids: lottoPlusBidsReducer,
    appState: appStateReducer,
  },
  middleware: [...customMiddleware],
});

export default store;
