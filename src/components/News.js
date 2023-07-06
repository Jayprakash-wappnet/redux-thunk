import React from "react";
import { useEffect } from "react";
import { fetchNews } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const News = () => {
  const dispatch = useDispatch();

  const { news, isLoading, error } = useSelector((state) => state);

  console.log(news);
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div>
      {isLoading && <div> Loading...</div>}
      {error && <div>{error}</div>}
      {news && (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a ref={article.url} target="_blank" rel="noopener noreffer">
                <h1>{article.title}</h1>
              </a>
              <p>{article.description}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
