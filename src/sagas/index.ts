import { all, fork } from 'redux-saga/effects';
import { getPlaceSaga } from '../db/saga/place';
import { loginSaga }  from '../db/saga/login'

export default function* rootSaga() {
  yield all([
    fork(getPlaceSaga),
    fork(loginSaga)
  ]);
}
