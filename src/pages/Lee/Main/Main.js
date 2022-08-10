import React, { useEffect, useState } from 'react';
import Nav from '../Nav/nav';
import Feed from '../feed/Feed';
import './main.scss';

const Main = () => {
  const [link, setLink] = useState([]);
  const [story, setStory] = useState([]);
  const [feed, setFeed] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setLink(result));
  }, []);

  useEffect(() => {
    fetch('/data/storyData.json')
      .then(response => response.json())
      .then(result => setStory(result));
  }, []);

  useEffect(() => {
    fetch('/data/profile.json')
      .then(response => response.json())
      .then(result => setProfile(result));
  }, []);

  useEffect(() => {
    fetch('/data/feed.json')
      .then(response => response.json())
      .then(result => setFeed(result));
  }, []);

  return (
    <div className="main">
      <Nav />
      <div className="container">
        <main>
          <div className="feeds__stories">
            {story.map(item => (
              <div key={item.id} className="feeds__story">
                <img className="img__round-big" src={item.src} alt={item.alt} />
                <div className="smallText">{item.name}</div>
              </div>
            ))}
            <div className="new-feed middleText">새 게시물</div>
          </div>
          <div className="feedContainer">
            {feed.map(data => (
              <Feed key={data.id} data={data} />
            ))}
          </div>

          <div className="main-right">
            <div className="profile">
              <img
                className="img__round-medium"
                src="images/Lee/프3.jpeg"
                alt="nope"
              />
              <div className="profile__text">
                <div className="middleText">
                  <h4>dev_codyman0</h4>
                </div>
                <div className="smallText">에러 해결자</div>
              </div>
              <div className="transition small__text">전환</div>
            </div>
            <div className="story__names">
              <div className="smallText">회원님을 위한 추천</div>
              <div className="middleText">모두 보기</div>
            </div>
            <div className="story">
              {profile.map(info => (
                <div key={info.id} className="story__profile">
                  <img
                    className="img__round-small"
                    src={info.src}
                    alt={info.alt}
                  />
                  <div className="profile__text">
                    <h4>{info.name}</h4>
                    <div className="smallText">{info.feature}</div>
                  </div>
                  <div className="transition smallerText">팔로우</div>
                </div>
              ))}
            </div>
            <div className="recommendation middleText">
              {link.map(info1 => (
                <div key={info1.id}>
                  <span>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {info1.name}
                    </a>
                  </span>
                  <span>.</span>
                </div>
              ))}
              <br />
              <br />
              <i className="uil uil-copyright" />
              <span>westagram from juyoung</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
