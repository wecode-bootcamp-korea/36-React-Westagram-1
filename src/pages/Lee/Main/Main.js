import React, { useEffect, useState } from 'react';
import Nav from '../Nav/nav';
import Feed from '../feed/Feed';
import './main.scss';

const Main = () => {
  const [links, setLink] = useState([]);
  const [stories, setStory] = useState([]);
  const [feeds, setFeed] = useState([]);
  const [profiles, setProfile] = useState([]);
  const [checkValue, setCheckValue] = useState('');
  const [copyLists, setCopyList] = useState([]);

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

  useEffect(() => {
    fetch('/data/feed.json')
      .then(response => response.json())
      .then(result => setFeed(result));
  }, []);

  useEffect(() => {
    let copy = [...feeds];
    setCopyList(
      copy.filter(
        data => data.name === checkValue || data.name.includes(checkValue)
      )
    );
  }, [checkValue]);

  const onChangeHandler = e => {
    e.preventDefault();
    setCheckValue(e.target.value);
  };

  return (
    <div className="main">
      <Nav Feed={feeds} checkValue={checkValue} onChange={onChangeHandler} />
      <div className="container">
        <main>
          <div className="feeds__stories">
            {stories.map(story => (
              <div key={story.id} className="feeds__story">
                <img
                  className="img__round-big"
                  src={story.src}
                  alt={story.alt}
                />
                <div className="smallText">{story.name}</div>
              </div>
            ))}
            <div className="new-feed middleText">새 게시물</div>
          </div>
          <div className="feedContainer">
            {copyLists.length > 0
              ? copyLists.map(copyList => (
                  <Feed key={copyList.id} data={copyList} />
                ))
              : feeds.map(feed => <Feed key={feed.id} data={feed} />)}
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
              {profiles.map(profile => (
                <div key={profile.id} className="story__profile">
                  <img
                    className="img__round-small"
                    src={profile.src}
                    alt={profile.alt}
                  />
                  <div className="profile__text">
                    <h4>{profile.name}</h4>
                    <div className="smallText">{profile.feature}</div>
                  </div>
                  <div className="transition smallerText">팔로우</div>
                </div>
              ))}
            </div>
            <div className="recommendation middleText">
              {links.map(link => (
                <div key={link.id}>
                  <span>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.name}
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
