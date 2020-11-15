import { take, takeEvery, put, call } from "redux-saga/effects";

// Worker saga
function* workerSaga() {
  console.log("Request Success");
  yield put({ type: "REQUEST_SUCCESS" });
}

function* loginWS() {
  console.log("User log in");
  yield call(workerSaga);
}

function* logoutWS() {
  console.log("User log out");
  yield call(workerSaga);
}

function* addCartWS() {
  console.log("Item added to cart");
  yield call(workerSaga);
}

// Watcher saga
function* rootSaga() {
  yield take("LOGIN");
  yield call(loginWS);
  yield takeEvery("ADD_TO_CART", addCartWS);
  yield take("LOGOUT");
  yield call(logoutWS);
}

export default rootSaga;
