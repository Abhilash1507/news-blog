import React from "react";
function NewsItem({ item }) {
  const date = item.publishedAt;

  return (
    <a href={item.url} className="article">
      <div className="article-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>
      <div className="article-content">
        <div className="article-title">
          <h1>{item.title}</h1>
        </div>
        <p className="article-description">{item.description}</p>
        <div className="article-details">
          <small>
            <b>Published at: </b>
            {date}
          </small>
        </div>
      </div>
    </a>
  );
}

export default NewsItem;
