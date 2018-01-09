import constants from '../reducers/constants.js';
import { put, takeEvery, select } from 'redux-saga/effects';
import api from '../reducers/api.js';
import { getPage, getData, getPageCount } from '../reducers/selectors.js';

const limit = 5;

function* fetchData (action) {
  try {
    const currentPage = yield select(getPage);
    const result = yield api.getPhotos(limit, currentPage);
    const dataLength = result.length;
    const pageCount = Math.round(dataLength / limit);
    const data = {
      result: result,
      resultShow: result.slice((currentPage - 1) * limit, limit),
      pageCount,
    };

    yield put({ type: constants.FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: constants.FETCHING_DATA_FAILURE });
  }
}

function* nextPage (action) {
  try {
    const currentPage = yield select(getPage);
    const currentPageCount = yield select(getPageCount);
    const currentData = yield select(getData);
    let page = currentPage + 1;
    if (currentPage + 1 > currentPageCount) {
      page = currentPageCount;
    }

    const result = currentData.slice((page - 1) * limit, page * limit);
    const data = {
      result,
      page,
    }

    yield put({ type: constants.DATA_PAGE_SUCCESS, data });
  } catch (e) {
    yield put({ type: constants.DATA_PAGE_FAILURE });
  }
}

function* prevPage (action) {
  try {
    const currentPage = yield select(getPage);
    const currentData = yield select(getData);
    let page = currentPage - 1;
    if (currentPage - 1 < 1) {
      page = 1;
    }

    const result = currentData.slice((page - 1) * limit, page * limit);
    const data = {
      result,
      page,
    }

    yield put({ type: constants.DATA_PAGE_SUCCESS, data });
  } catch (e) {
    yield put({ type: constants.DATA_PAGE_FAILURE });
  }
}

function* dataSaga () {
  yield takeEvery(constants.FETCHING_DATA, fetchData);
  yield takeEvery(constants.DATA_NEXT_PAGE, nextPage);
  yield takeEvery(constants.DATA_PREV_PAGE, prevPage);
}

export default dataSaga;
