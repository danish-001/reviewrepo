// saga root for settings

*function getProfile()  {
  rerturn Request
}
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([getProfile]);
}
