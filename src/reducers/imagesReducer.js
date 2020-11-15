import { IMAGES } from "../constants";

const initialState = {
  load: false,
  images: [],
  error: '',
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return { ...state, load: true };
    case IMAGES.LOAD_SUCCESS:
      return { ...state, load: false, images: [...state.images, ...action.images], error: '' };
    case IMAGES.LOAD_FAIL:
      return { ...state, load: false, images: [], error: action.error };
    default:
      return state;
  }
};

export default imagesReducer;