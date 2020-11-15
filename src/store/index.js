import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { loadImages } from "../actions";
import imagesReducer from "../reducers/imagesReducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  imagesReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga);
store.dispatch(loadImages());
store.dispatch(loadImages());
