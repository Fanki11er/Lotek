import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import lottoBidsReducer from './reducers/LottoBidsReducer';
import lottoPlusBidsReducer from '../store/reducers/LottoPlusBidsReducer';
import lottoSetsReducer from './reducers/LottoSetsReducer';
import lottoPlusSetsReducer from './reducers/LottoPlusSetsReducer';

const customMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    lottoBids: lottoBidsReducer,
    lottoPlusBids: lottoPlusBidsReducer,
    lottoSets: lottoSetsReducer,
    lottoPlusSets: lottoPlusSetsReducer,
  },
  middleware: [...customMiddleware],
});

export default store;
