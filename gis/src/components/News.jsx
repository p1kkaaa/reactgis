import React from "react";
// import "./News.css";

const News = () => {
  const newsItems = [
    {
      title: "Заголовок 1",
      description: "Описание новости 1.",
      image: "photo/news1.jpg",
    },
    {
      title: "Заголовок 2",
      description: "Описание новости 2.",
      image: "photo/news2.jpg",
    },
    {
      title: "Заголовок 3",
      description: "Описание новости 3.",
      image: "photo/news3.jpg",
    },
  ];

  return (
    <div className="news-block text-center">
      <h3 className="fw-bold mb-4 animate__animated animate__fadeInUp wow">Новости</h3>
      <div className="news-container">
        {newsItems.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.image} className="news-image" alt={news.title} />
            <div className="news-body">
              <h5 className="news-title">{news.title}</h5>
              <p className="news-text">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
