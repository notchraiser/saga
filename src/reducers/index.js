import imagesReducer from "./imagesReducer";
import pagesReducer from "./pagesReducer";
import statsReducer from './statsReducer';
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  images: imagesReducer,
  nextPage: pagesReducer,
  imagestats: statsReducer,
});

export default rootReducers;
