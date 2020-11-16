import { runSaga } from 'redux-saga';
import { getPage, handleImagesLoad } from '../imagesSaga';

test('Selector gives back the page', () => {
    const nextPage = 1;
    const res = getPage({nextPage});
    expect(res).toBe(nextPage);
});

test('Should load images & handle them in case of success', async() => {
    const dispatched = [];
    const fakestore = {
        getState: () => ({nextPage: 1}),
        dispatch: action =>  dispatched.push(action),
    }
    await runSaga(fakestore, handleImagesLoad).done;
    console.log(dispatched);
});