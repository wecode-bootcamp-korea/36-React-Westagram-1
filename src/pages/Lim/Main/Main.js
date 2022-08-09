import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Article from './components/Article';
import Story from './components/Storys';
import Recommend from './components/Recommends';
import Footer from './components/Footer';
import './Main.scss';

const Main = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          <Article />
        </div>
        <section className="mainRight">
          <div className="myProfile">
            <img
              className="myImg"
              src="/images/Lim/myProfile.jpg"
              alt="my profile img"
            />
            <div className="myIdName">
              <p className="myId">forest_xox</p>
              <p className="myName">임승민</p>
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
