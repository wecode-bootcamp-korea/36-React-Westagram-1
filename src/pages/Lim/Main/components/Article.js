import React, { useState } from 'react';
import CommentBoard from './CommentBoard';
import './Article.scss';

function Article() {
  const [inputV, setInputV] = useState('');
  const [comment, setComment] = useState([]);

  const addComment = e => {
    e.preventDefault();
    setComment([...comment, inputV]);
    setInputV('');
  };

  return (
    <article>
      <div className="proBar">
        <div className="proInfo">
          <img
            className="proImg"
            src="/images/Lim/man.jpg"
            alt="profileImage"
          />
          <p className="proName">steaven_traveler</p>
        </div>
        <i className="fa-solid fa-ellipsis" />
      </div>

      <img className="feedImg" src="/images/Lim/travel.jpg" alt="feedImage" />

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
          <img
            className="likeImg"
            src="/images/Lim/woman.jpg"
            alt="womanImage"
          />
          <p className="likeNumText">Grayson님외 43명이 좋아합니다.</p>
        </div>

        <div className="feedText">
          <p className="userId">steaven_traveler</p>
          <p className="userText">즐거운 여행~~</p>
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
          onChange={e => setInputV(e.target.value)}
        />
        <button className="commentBtn" onClick={addComment}>
          게시
        </button>
      </form>
    </article>
  );
}

export default Article;
