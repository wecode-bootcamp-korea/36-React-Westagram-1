import './Main.scss';
import Comment from './Comment/Comment';
import { useState } from 'react';

let firstComment = ['와~ 너무 멋있어!!!!', '잘 보고 갑니다.', '뭉클해져요'];

function Main() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(firstComment);

  function commentPlus(e) {
    setComment(e.target.value);
  }

  function isEnter(e) {
    if (e.key === 'Enter') {
      e.target.value = '';
      let tmp = [...comments];
      tmp.push(comment);
      setComments(tmp);
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="leftLogo">
          <img
            src="images/Mun/instagram.png"
            alt="tmp"
            className="leftLogoImg"
          />
          | westagram
        </div>
        <input className="navInput" type="text" placeholder="검색" />
        <div className="rigthMenu">
          <img src="images/Mun/Mun/explore.png" alt="tmp" />
          <img src="images/Mun/Mun/heart.png" alt="tmp" />
          <img src="images/Mun/profile.png" alt="tmp" />
        </div>
      </nav>
      <div className="mainContainer">
        <div className="feedContainer">
          <section className="feedBox">
            <div className="feedTop">
              <div className="feedTopLeft">
                <img src="./images/Mun/user2.jpg" alt="tmp" />
                dogLove
              </div>
              <div className="feedTopRight">
                <img src="./images/Mun/more.png" alt="tmp" />
              </div>
            </div>
            <article className="feedMiddleImg">
              <img src="./images/Mun/feedimg1.jpg" alt="tmp" />
            </article>
            <div className="feedBottom">
              <div className="bottomMenu">
                <div className="bottomMenuLeft">
                  <img src="./images/Mun/heart.png" alt="tmp" />
                  <img src="./images/Mun/chat.png" alt="tmp" />
                  <img src="./images/Mun/upload.png" alt="tmp" />
                </div>
                <div className="bottomMenuRight">
                  <img src="./images/Mun/bookmark.png" alt="tmp" />
                </div>
              </div>
              <div className="like">
                <img src="./images/Mun/loveimg2.jpg" alt="tmp" />
                <span className="userName">edBlure</span>님 외 2명이 좋아합니다
              </div>
              <div className="commentContainer">
                <div className="commentMore">댓글</div>
                <div className="commentBox">
                  <Comment comments={comments} />
                  <div className="commentImgBox">
                    <img
                      src="./images/Mun/heart.png"
                      className="commentHeart"
                      alt="tmp"
                    />
                  </div>
                </div>

                {comments.map(c => {
                  return <Comment contents={c} key={c} />;
                })}
              </div>
              <div className="commentTime">42분 전</div>
              <div className="commentInputBox">
                <input
                  onChange={e => {
                    commentPlus(e);
                  }}
                  onKeyDown={e => {
                    isEnter(e);
                  }}
                  type="text"
                  placeholder="댓글 달기..."
                  className="commentInput"
                />
                <button className="commentButton">게시</button>
              </div>
            </div>
          </section>
          <section className="feedBox">
            <div className="feedTop">
              <div className="feedTopLeft">
                <img src="./images/Mun/arinProfile.png" alt="tmp" />
                ogmmgo
              </div>
              <div className="feedTopRight">
                <img src="./images/Mun/more.png" alt="tmp" />
              </div>
            </div>
            <article className="feedMiddleImg">
              <img src="./images/Mun/redSky.jpg" alt="tmp" />
            </article>
            <div className="feedBottom">
              <div className="bottomMenu">
                <div className="bottomMenuLeft">
                  <img src="./images/Mun/heart.png" alt="tmp" />
                  <img src="./images/Mun/chat.png" alt="tmp" />
                  <img src="./images/Mun/upload.png" alt="tmp" />
                </div>
                <div className="bottomMenuRight">
                  <img src="./images/Mun/bookmark.png" alt="tmp" />
                </div>
              </div>
              <div className="like">
                <img src="./images/Mun/loveimg1.jpg" alt="tmp" />
                <span className="userName">fs_0032</span>님 외 2명이 좋아합니다
              </div>
              <div className="commentContainer">
                <div className="commentMore">댓글</div>
                <div className="commentBox">
                  <div className="comment">
                    <span className="userName">Apple_king</span>멋진 사진 잘보고
                    갑니다.
                  </div>
                  <div className="commentImgBox">
                    <img
                      src="./images/Mun/heart.png"
                      className="commentHeart"
                      alt="tmp"
                    />
                  </div>
                </div>
              </div>
              <div className="commentTime">42분 전</div>
              <div className="commentInputBox">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="commentInput"
                />
                <button className="commentButton">게시</button>
              </div>
            </div>
          </section>
        </div>
        <aside className="asideFeed">
          <div className="meBox">
            <div>
              <img src="./images/Mun/meimg.jpg" alt="tmp" />
            </div>
            <div className="meNameBox">
              <div className="meEngName">nyam_nyam2</div>
              <div className="meName">냠냠이</div>
            </div>
          </div>
          <div className="storyBox">
            <div className="asideBoxTop">
              <div className="grayFont">스토리</div>
              <div>모두 보기</div>
            </div>
            <div className="asideUserSpace">
              <div>
                <img src="./images/Mun/storyimg1.jpg" alt="tmp" />
              </div>
              <div className="asideUser">
                <div className="userName">KoE_oooo</div>
                <div className="asideUserTime">17분 전</div>
              </div>
            </div>
            <div className="asideUserSpace">
              <div>
                <img src="./images/Mun/storyimg2.jpeg" alt="tmp" />
              </div>
              <div className="asideUser">
                <div className="userName">marinBoy</div>
                <div className="asideUserTime">12분 전</div>
              </div>
            </div>
            <div className="asideUserSpace">
              <div>
                <img src="./images/Mun/storyimg3.jpg" alt="tmp" />
              </div>
              <div className="asideUser">
                <div className="userName">goRagoRa</div>
                <div className="asideUserTime">9분 전</div>
              </div>
            </div>
            <div className="asideUserSpace">
              <div>
                <img src="./images/Mun/storyimg4.png" alt="tmp" />
              </div>
              <div className="asideUser">
                <div className="userName">ariNa</div>
                <div className="asideUserTime">5분 전</div>
              </div>
            </div>
          </div>
          <div className="recommendBox">
            <div className="asideBoxTop">
              <div className="grayFont">회원님을 위한 추천</div>
              <div>모두 보기</div>
            </div>
            <div className="asideUserSpace">
              <div>
                <img src="./images/Mun/recoimg1.jpg" alt="tmp" />
              </div>
              <div className="asideUser">
                <div className="userName">q1o1rhvk</div>
                <div className="asideUserFriend">
                  qorhvk0202님 외 29명이 팔로우 중입니다.
                </div>
              </div>
              <button className="followButton">팔로우</button>
            </div>
            <div className="asideUserSpace">
              <div>
                <img src="./images/Mun/recoimg2.jpg" alt="tmp" />
              </div>
              <div className="asideUser">
                <div className="userName">sKsms4fka</div>
                <div className="asideUserFriend">
                  99aa_god님 외 12명이 팔로우 중입니다.
                </div>
              </div>
              <button className="followButton">팔로우</button>
            </div>
            <div className="asideUserSpace">
              <div>
                <img src="./images/Mun/recoimg3.jpg" alt="tmp" />
              </div>
              <div className="asideUser">
                <div className="userName">Ha_Ha_Man</div>
                <div className="asideUserFriend">
                  holy33님 외 5명이 팔로우 중입니다.
                </div>
              </div>
              <button className="followButton">팔로우</button>
            </div>
          </div>
          <footer className="noticeBox">
            <div className="noticeInfo">
              Instagram 정보·지원·홍보 센터·API·채용
              정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
            </div>
            <div>ⓒ 2019 INSTAGRAM</div>
          </footer>
        </aside>
      </div>
    </>
  );
}
export default Main;
