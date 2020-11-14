import { IMAGES } from "../constants";

const initialState = {
  load: false,
  images: [],
  error: '',
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return { ...state, load: false };
    case IMAGES.LOAD_SUCCESS:
      return { ...state, load: true, images: action.images };
    case IMAGES.LOAD_FAIL:
      return { ...state, load: true, error: action.error };
    default:
      return state;
  }
};

export default imagesReducer;