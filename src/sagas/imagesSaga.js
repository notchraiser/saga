import { call, put, takeEvery, select } from 'redux-saga/effects';
import { loadImages, setImages, setError } from '../actions';
import {fetchImages} from '../api';
import { IMAGES } from '../constants';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        console.log('loading images');
        const nextpage = yield select(getPage); 
        const images = yield call(fetchImages, nextpage);
        yield put(setImages(images));
    }catch(err) {
        // dispatch error action
        yield put(setError(err.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
