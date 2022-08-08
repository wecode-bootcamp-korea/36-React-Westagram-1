import React from 'react';
import Comment from './Comment/Comment';
import { useState } from 'react';
import './FeedBox.scss';

const FeedBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function commentChange(e) {
    setComment(e.target.value);
  }

  function commentPlus(e) {
    e.preventDefault();
    let tmp = [...comments];
    tmp.push(comment);
    setComments(tmp);
    setComment('');
  }

  return (
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
          <Comment nickname={'AbC_0078'} comments={['와~ 너무 멋있어!!!!']} />
          <Comment nickname={'ioi_oio'} comments={['잘 보고 갑니다.']} />
          <Comment nickname={'kkrm3'} comments={['뭉클해져요']} />
          <Comment nickname={'nyam_nyam2'} comments={comments} />
        </div>
        <div className="commentTime">42분 전</div>
        <form className="commentInputBox">
          <input
            onChange={e => {
              commentChange(e);
            }}
            value={comment}
            type="text"
            placeholder="댓글 달기..."
            className="commentInput"
          />
          <button
            onClick={e => {
              commentPlus(e);
            }}
            className="commentButton"
          >
            게시
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedBox;
