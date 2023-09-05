import { call, all } from 'redux-saga/effects';
import { categoriesSaga } from './category/category.saga';

export function* rootSaga() {
    yield all([call(categoriesSaga)])
}