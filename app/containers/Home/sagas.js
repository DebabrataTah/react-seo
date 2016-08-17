import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import api from '../../services/api'
import { FETCH_PAGE, FETCH_PAGE_SUCCESS } from './constants'

function* fetchPage() {
  try {
    const data = yield call(() => api.fetchHomePage());
    yield put({type: FETCH_PAGE_SUCCESS, payload: data});
  } catch (e) {
    // TODO - put failure action
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(FETCH_PAGE, fetchPage);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
