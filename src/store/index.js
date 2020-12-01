import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { loadImages } from "../actions";
import rootReducers from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
/*
export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
*/
sagaMiddleware.run(rootSaga);
// store.dispatch(loadImages());
// store.dispatch(loadImages());
