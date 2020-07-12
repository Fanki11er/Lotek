import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../Firebase/firebaseConfig';
import { getBidsFromDatabase } from '../store/actions/lottoBidsActions';
import { LottoBid } from '../utils/classes';
import { LottoBidTypes } from '../utils/types';
import { DatabaseEndpoint } from '../Firebase/baseEndpoints';

const useListenerToDatabase = (path: DatabaseEndpoint, type: LottoBidTypes) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = (type: LottoBidTypes) => {
      return db.ref(path).on('value', async (snapshot) => {
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val()).flat() as LottoBid[];

          dispatch(getBidsFromDatabase(type, data));
        }
      });
    };
    const listener = getData(type);
    return () => db.ref(path).off('value', listener);
  }, []);
};

export default useListenerToDatabase;
