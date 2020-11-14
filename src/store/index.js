import { createStore } from "redux";
import imagesReducer from "../reducers/imagesReducer";

export const store = createStore(
  imagesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
