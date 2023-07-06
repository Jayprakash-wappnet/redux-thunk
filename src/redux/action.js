import * as actions from "./actionTypes";

export const fetchNewsRequest = () => {
  return {
    type: actions.FETCH_NEWS_REQUEST
  };
};

export const fetchNewsSuccess = (news) => {
  return {
    type: actions.FETCH_NEWS_SUCCESS,
    payload: news
  };
};
export const fetchNewsFailure = (error) => {
  return {
    type: actions.FETCH_NEWS_FAILURE,
    payload: error
  };
};

export const fetchNews = () => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=e58115446a8f44e782bae4eb44f448f6")
      .then((response) => response.json())
      .then((data) => {
        const news = data.articles.map((article) => {
          return {
            title: article.title,
            url: article.url,
            description: article.description
          };
        });
        console.log("NEWS", news);
        dispatch(fetchNewsSuccess(news));
      })
      .catch((error) => {
        dispatch(fetchNewsFailure(error.message));
      });
  };
};
