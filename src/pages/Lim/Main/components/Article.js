import React, { useState } from 'react';
import CommentBoard from './CommentBoard';
import './Article.scss';

const Article = ({ name, text, likeNum, feedImg, profileImg, commentImg }) => {
  const [inputV, setInputV] = useState('');
  const [comment, setComment] = useState([]);

  const addComment = e => {
    e.preventDefault();
    setComment([...comment, inputV]);
    setInputV('');
  };

  const saveComment = e => {
    setInputV(e.target.value);
  };
  return (
    <article>
      <div className="feed">
        <div className="proBar">
          <div className="proInfo">
            <img className="proImg" src={profileImg} alt="profileImage" />
            <p className="proName">{name}</p>
          </div>
          <i className="fa-solid fa-ellipsis" />
        </div>

        <img className="feedImg" src={feedImg} alt="feedImage" />

        <div className="mainInfo">
          <div className="like">
            <div className="likeMenu">
              <i className="likeMenu3 fa-regular fa-heart" />
              <i className="likeMenu3 fa-regular fa-comment" />
              <i className="likeMenu3 fa-regular fa-share-from-square" />
            </div>
            <i className="fa-regular fa-bookmark" />
          </div>

          <div className="likeNum">
            <img className="likeImg" src={commentImg} alt="womanImage" />
            <p className="likeNumText">{likeNum}명이 좋아합니다.</p>
          </div>

          <div className="feedText">
            <p className="userId">{name}</p>
            <p className="userText">{text}</p>
          </div>

          <div className="comments">
            <CommentBoard comment={comment} />
          </div>

          <div className="feedTime">
            <p>1시간 전</p>
          </div>
        </div>

        <form className="addComment">
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
            value={inputV}
            onChange={saveComment}
          />
          <button className="commentBtn" onClick={addComment}>
            게시
          </button>
        </form>
      </div>
    </article>
  );
};

export default Article;
