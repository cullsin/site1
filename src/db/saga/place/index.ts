import { put, takeLatest} from 'redux-saga/effects';
import { REGISTER_PLACE_REQUEST,REGISTER_PLACE_SUCCESS} from '../../actionTypes/place';

function* fetchPlace(option) {  
    const place = option.payload.place;
    yield put({ type: REGISTER_PLACE_SUCCESS, place });
}

export function* getPlaceSaga() {
    yield takeLatest(REGISTER_PLACE_REQUEST, fetchPlace);
}