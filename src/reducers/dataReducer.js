import constants from './constants.js'
const initialState = {
  data: [],
  dataShow: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  page: 1,
  pageCount: 1,
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case constants.FETCHING_DATA:
      return {
        ...state,
        data: [],
        dataShow: [],
        isFetching: true
      }
    case constants.FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data.result,
        dataShow: action.data.resultShow,
        pageCount: action.data.pageCount,
      }
    case constants.FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case constants.DATA_PAGE:
      return {
        ...state,
        page: state.page,
      }
    case constants.DATA_PAGE_SUCCESS:
      return {
        ...state,
        page: action.data.page,
        dataShow: action.data.result,
      }
    case constants.DATA_PAGE_FAILURE:
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}
