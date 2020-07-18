import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { db } from '../Firebase/firebaseConfig';
import { getSetsFromDatabase } from '../store/actions/lottoSetsActions';
import { LottoBidTypes, LottoSet } from '../utils/types';
import { DatabaseEndpoint } from '../Firebase/baseEndpoints';

const useListenerForSets = (path: DatabaseEndpoint, type: LottoBidTypes) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = (type: LottoBidTypes) => {
      return db.ref(path).on('value', async (snapshot) => {
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val()).flat() as LottoSet[];

          dispatch(getSetsFromDatabase(type, data));
        } else dispatch(getSetsFromDatabase(type, []));
      });
    };
    const listener = getData(type);
    return () => db.ref(path).off('value', listener);
  }, [dispatch, path, type]);
};

export default useListenerForSets;
