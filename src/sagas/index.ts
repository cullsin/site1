import { all, fork } from 'redux-saga/effects';

import { getPlaceSaga } from '../db/saga/place';

export default function* rootSaga() {
  yield all([
    fork(getPlaceSaga),
  ]);
}
