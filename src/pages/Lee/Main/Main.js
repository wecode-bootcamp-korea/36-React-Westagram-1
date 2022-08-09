import React from 'react';
import Nav from '../Nav/nav';
import Feed from '../feed/Feed';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <Nav />
      <main>
        <div className="feeds__stories">
          {FEED_STORY_IMGS.map(item => (
            <div key={item.id} className="feeds__story">
              <img className="img__round-big" src={item.src} alt={item.alt} />
              <div className="smallText">{item.name}</div>
            </div>
          ))}
          <div className="new-feed middleText">새 게시물</div>
        </div>
        <div className="feedContainer">
          <Feed />
          <Feed />
          <Feed />
          <Feed />
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
            {PROFILE_INFORMATIONS.map(item => (
              <div key={item.id} className="story__profile">
                <img
                  className="img__round-small"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="profile__text">
                  <div className="middleText">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="smallText">{item.feature}</div>
                </div>
                <div className="transition smallerText">팔로우</div>
              </div>
            ))}
          </div>
          <div className="recommendation middleText">
            소개, 도움말 , 홍보센터, API, 채용정보 <br />
            <i className="uil uil-copyright" />
            westagram from juyoung
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;

const FEED_STORY_IMGS = [
  { id: 1, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 2, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 3, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 4, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 5, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 6, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
];

const PROFILE_INFORMATIONS = [
  {
    id: 1,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'dev_codyman0',
    feature: '에러 해결자',
  },
  {
    id: 2,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'dev_codyman0',
    feature: '에러 해결자',
  },
  {
    id: 3,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'dev_codyman0',
    feature: '에러 해결자',
  },
  {
    id: 4,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'dev_codyman0',
    feature: '에러 해결자',
  },
  {
    id: 5,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'dev_codyman0',
    feature: '에러 해결자',
  },
];

// 멘토님이 작성한 방식
//refactoring
