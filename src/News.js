import React, { useEffect, useState } from "react";

import "./news.css";
import Skeleton from "react-loading-skeleton";

function News() {
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ApiKey = process.env.REACT_APP_NEWS_API_KEY;
  const query = `http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${ApiKey}`;

  //=============================================================
  //                    FETCHING DATA
  //=============================================================

  async function getNews() {
    let response = await fetch(query);
    let data = await response.json();

    // console.log(data["articles"]);
    setNewsData(data["articles"]);
  }

  //=============================================================
  //                    USE EFFECT
  //=============================================================

  useEffect(() => {
    getNews().then(() => setIsLoading(false));
  }, []);

  //=============================================================
  //                    OPEN NEWS ON CLICK
  //=============================================================
  function openNews(url) {
    window.open(url, " _blank");
  }

  //=============================================
  //=============================================

  return (
    <div className="newsMainCont">
      {isLoading ? (
        <>
          <div className="newsSkeletonCont">
            <Skeleton height={70} />
            <Skeleton height={20} count={5} />
          </div>
          <div className="newsSkeletonCont">
            <Skeleton height={70} />
            <Skeleton height={20} count={5} />
          </div>
          <div className="newsSkeletonCont">
            <Skeleton height={70} />
            <Skeleton height={20} count={5} />
          </div>
        </>
      ) : (
        newsData &&
        newsData.map((e, index) => {
          return (
            <div
              key={index}
              className="newsCont"
              onClick={() => {
                openNews(e.url);
              }}
            >
              <div className="newsImgCont">
                <img className="newsImg" alt="news here" src={e.urlToImage} />
              </div>
              <div className="newsDataCont">
                <h2 className="newsTitle">{e.title}</h2>
                <div className="newsDescCont">
                  <h4 className="newsDesc">{e.description}</h4>
                  <div className="newsDataSmCont">
                    <h5 className="newsSource">Source :{e.source.name}</h5>
                    <h5 className="newsAuthor">Author :{e.author}</h5>
                    <h5 className="newsData">
                      Date : {e.publishedAt.replace(/[T].*/g, "")}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
export default News;
