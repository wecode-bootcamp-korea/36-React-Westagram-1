import React, { useEffect, useState } from 'react';
import Nav from '../Nav/nav';
import Feed from '../feed/Feed';
import './main.scss';

const Main = () => {
  const [link, setLink] = useState([]);
  console.log(link);
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setLink(result));
  }, []);

  return (
    <div className="main">
      <Nav />
      <div className="container">
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
            <Feed data={USER_INFORMATIONS} feed={FEED_INFORMATION} />
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
              {USER_INFORMATIONS.map(item => (
                <div key={item.id} className="story__profile">
                  <img
                    className="img__round-small"
                    src={item.src}
                    alt={item.alt}
                  />
                  <div className="profile__text">
                    <h4>{item.name}</h4>
                    <div className="smallText">{item.feature}</div>
                  </div>
                  <div className="transition smallerText">팔로우</div>
                </div>
              ))}
            </div>
            <div className="recommendation middleText">
              {link.map(info => (
                <>
                  <span key={info.id}>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {info.name}
                    </a>
                  </span>
                  <span>.</span>
                </>
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

const FEED_STORY_IMGS = [
  { id: 1, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 2, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 3, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 4, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 5, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
  { id: 6, src: 'images/Lee/ANGMOND.jpeg', alt: 'argmond', name: 'argmond' },
];

const USER_INFORMATIONS = [
  {
    id: 1,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'dev_codyman0',
    subName: '오늘은 여기까지1',
    feature: 'deanthony_hatter님이 팔로우합니다.',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    reply: '댓글 기능을 구현해보자!',
    heart: '2312414명',
  },
  {
    id: 2,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'wecode__bootcamp',
    subName: '오늘은 여기까지2',
    feature: 'we_are_code님 외 1명이 팔로우합니다',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    saying: '!',
    heart: '414212명',
  },
  {
    id: 3,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'that_techsiss',
    subName: '오늘은 여기까지3',
    feature: 'Instagram 신규 가입',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    saying: '댓글 기능을 구현해보자!',
    heart: '22343명',
  },
  {
    id: 4,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'edoc_code',
    subName: '오늘은 여기까지4',
    feature: 'Instagram 신규 가입',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    saying: '댓글 기능을 구현해보자!',
    heart: '10023명',
  },
  {
    id: 5,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'codingpathsala',
    subName: '오늘은 여기까지5',
    feature: '에러 deanthony_hatter님 외 1명이 팔로우...',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    saying: '댓글 기능을 구현해보자!',
    heart: '9명',
  },
];

const FEED_INFORMATION = [
  {
    id: 1,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'dev_codyman0',
    subName: '오늘은 여기까지1',
    feature: 'deanthony_hatter님이 팔로우합니다.',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    reply: '피드 게시 글 1',
    heart: '2312414명',
  },
  {
    id: 2,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'wecode__bootcamp',
    subName: '오늘은 여기까지2',
    feature: 'we_are_code님 외 1명이 팔로우합니다',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    saying: '피드 게시 글 2!',
    heart: '414212명',
  },
  {
    id: 3,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'that_techsiss',
    subName: '오늘은 여기까지3',
    feature: 'Instagram 신규 가입',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    saying: '피드 게시 글 3!',
    heart: '22343명',
  },
  {
    id: 4,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'edoc_code',
    subName: '오늘은 여기까지4',
    feature: 'Instagram 신규 가입',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    saying: '피드 게시 글 4!',
    heart: '10023명',
  },
  {
    id: 5,
    src: 'images/Lee/프3.jpeg',
    alt: 'profilePicture',
    name: 'codingpathsala',
    subName: '오늘은 여기까지5',
    articleSrc: 'images/Lee/피드.jpg',
    articleAlt: 'big-picture',
    saying: '피드 게시 글 5',
    heart: '9명',
  },
];

// 멘토님이 작성한 방식
//refactoring
