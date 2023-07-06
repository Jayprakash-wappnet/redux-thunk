import { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure, fetchNews } from "./action";
import * as actions from "./actionTypes";

const initialState = {
  news: [],
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actions.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        news: action.payload.news
      };
    case actions.FETCH_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        news: action.payload.error
      };
    default:
      return state;
  }
};

export default reducer;
