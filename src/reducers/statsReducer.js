import { act } from "react-dom/test-utils";
import { STATS } from "../constants";

const statsReducer = (state = {}, action) => {
  switch (action.type) {
    case STATS.LOAD:
      return {
        ...state,
        [action.id]: {
          isLoading: true,
          downloads: null,
          likes: null,
          error: false,
        },
      };
    case STATS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          downloads: action.downloads,
          likes: action.likes,
          views: action.views,
          error: false,
        },
      };
    case STATS.LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          downloads: null,
          likes: null,
          views: null,
          error: true,
        },
      };

    default:
      return state;
  }
};

export default statsReducer;
