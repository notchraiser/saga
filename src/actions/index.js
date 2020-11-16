import { IMAGES, STATS } from "../constants";

export const loadPageNumber = () => {
  return {
    type: IMAGES.LOAD_PAGE    
  };
};

export const loadImages = () => {
  return {
    type: IMAGES.LOAD,
  };
};

export const setImages = (images) => {
  return {
    type: IMAGES.LOAD_SUCCESS,
    images,
  };
};

export const setError = (error) => {
  return {
    type: IMAGES.LOAD_FAIL,
    error,
  };
};

export const loadImageStats = (id) => {
  return {
    type: STATS.LOAD,
    id,
  };
};

export const setImageStats = (id, res) => {
  return {
    type: STATS.LOAD_SUCCESS,
    id,
    downloads: res.downloads,
    likes: res.likes,
    views: res.views,
  };
};

export const setImageStatsError = (id) => {
  return {
    type: STATS.LOAD_FAIL,
    id,    
  };
};

