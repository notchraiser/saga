import imagesReducer from "./imagesReducer";
import pagesReducer from "./pagesReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  images: imagesReducer,
  nextPage: pagesReducer,
});

export default rootReducers;
