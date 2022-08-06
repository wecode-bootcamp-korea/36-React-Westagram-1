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
          <div className="feeds__story">
            <img
              className="img__round-big"
              src="images/Lee/ANGMOND.jpeg"
              alt="nope"
            />
            <div className="smallText">Angmond</div>
          </div>
          <div className="feeds__story">
            <img
              className="img__round-big"
              src="images/Lee/APEACH.jpeg"
              alt="nope"
            />
            <div className="smallText">Apeach</div>
          </div>
          <div className="feeds__story">
            <img
              className="img__round-big"
              src="images/Lee/FRODO.jpeg"
              alt="nope"
            />
            <div className="smallText">Frodo</div>
          </div>
          <div className="feeds__story">
            <img
              className="img__round-big"
              src="images/Lee/JAY-G.jpeg"
              alt="nope"
            />
            <div className="smallText">Jay-G</div>
          </div>
          <div className="feeds__story">
            <img
              className="img__round-big"
              src="images/Lee/JORDY.jpeg"
              alt="nope"
            />
            <div className="smallText">Jordy</div>
          </div>
          <div className="feeds__story">
            <img
              className="img__round-big"
              src="images/Lee/ANGMOND.jpeg"
              alt="nope"
            />
            <div className="smallText">Neo</div>
          </div>
          <div className="feeds__story">
            <img
              className="img__round-big"
              src="images/Lee/ANGMOND.jpeg"
              alt="nope"
            />
            <div className="smallText">Ryan</div>
          </div>
          <div className="new-feed middleText">새 게시물</div>
        </div>

        <div className="feedContainer">
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
            <div className="story__name smallText">회원님을 위한 추천</div>
            <div className="story__view middleText">모두 보기</div>
          </div>
          <div className="story">
            <div className="story__profile">
              <img
                className="img__round-small"
                src="images/Lee/프3.jpeg"
                alt="nope"
              />
              <div className="profile__text">
                <div className="middleText">
                  <h4>dev_codyman0</h4>
                </div>
                <div className="smallText">에러 해결자</div>
              </div>
              <div className="transition smallerText">팔로우</div>
            </div>
            <div className="story__profile">
              <img
                className="img__round-small"
                src="images/Lee/프3.jpeg"
                alt="nope"
              />
              <div className="profile__text">
                <div className="middleText">
                  <h4>dev_codyman0</h4>
                </div>
                <div className="smallText">에러 해결자</div>
              </div>
              <div className="transition smallerText">팔로우</div>
            </div>
            <div className="story__profile">
              <img
                className="img__round-small"
                src="images/Lee/프3.jpeg"
                alt="nope"
              />
              <div className="profile__text">
                <div className="middleText">
                  <h4>dev_codyman0</h4>
                </div>
                <div className="smallText">에러 해결자</div>
              </div>
              <div className="transition smallerText">팔로우</div>
            </div>
            <div className="story__profile">
              <img
                className="img__round-small"
                src="images/Lee/프3.jpeg"
                alt="nope"
              />
              <div className="profile__text">
                <div className="middleText">
                  <h4>dev_codyman0</h4>
                </div>
                <div className="smallText">에러 해결자</div>
              </div>
              <div className="transition smallerText">팔로우</div>
            </div>
            <div className="story__profile">
              <img
                className="img__round-small"
                src="images/Lee/프3.jpeg"
                alt="nope"
              />
              <div className="profile__text">
                <div className="middleText">
                  <h4>dev_codyman0</h4>
                </div>
                <div className="smallText">에러 해결자</div>
              </div>
              <div className="transition smallerText">팔로우</div>
            </div>
            <div className="story__profile">
              <img
                className="img__round-small"
                src="images/Lee/프3.jpeg"
                alt="nope"
              />
              <div className="profile__text">
                <div className="middleText">
                  <h4>dev_codyman0</h4>
                </div>
                <div className="smallText">에러 해결자</div>
              </div>
              <div className="transition smallerText">팔로우</div>
            </div>
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

// 멘토님이 작성한 방식
//refactoring
