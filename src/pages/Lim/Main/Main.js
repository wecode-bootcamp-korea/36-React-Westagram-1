import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Article from './components/Article';
import Story from './components/Storys';
import Recommend from './components/Recommends';
import Footer from './components/Footer';
import './Main.scss';

const Main = () => {
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setFeedInfoList(result));
  }, []);

  const [feedInfoList, setFeedInfoList] = useState([]);

  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          {feedInfoList.map(feedInfo => {
            return (
              <Article
                key={feedInfo.id}
                {...feedInfo}
              />
            );
          })}
        </div>
        <section className="mainRight">
          <div className="myProfile">
            <img
              className="myImg"
              src="/images/Lim/pororo.jpeg"
              alt="my profile img"
            />
            <div className="myIdName">
              <p className="myId">pororo</p>
              <p className="myName">뽀로로</p>
            </div>
          </div>
          <Story />
          <Recommend />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Main;
