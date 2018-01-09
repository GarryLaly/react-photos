import constants from './constants';

export function fetchData() {
  return {
    type: constants.FETCHING_DATA,
  }
}

export function nextPage() {
  return {
    type: constants.DATA_NEXT_PAGE,
  }
}

export function prevPage() {
  return {
    type: constants.DATA_PREV_PAGE,
  }
}
