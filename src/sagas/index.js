import { call, put, take, takeEvery } from 'redux-saga/effects';

import { IMAGES } from '../constants';

function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}

function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;