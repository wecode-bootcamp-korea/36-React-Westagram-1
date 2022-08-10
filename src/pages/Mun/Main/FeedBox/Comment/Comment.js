import React from 'react';
import './Comment.scss';
import { useState } from 'react';

const Comment = ({ nickname, comment, close, idx, comments, setComments }) => {
  const [heartSrc, setHeartSrc] = useState([true, './images/Mun/heart.png']);

  function commentHeart() {
    heartSrc[0]
      ? setHeartSrc([false, './images/Mun/redHeart.png'])
      : setHeartSrc([true, './images/Mun/heart.png']);
  }

  function onRemove() {
    let tmpComments = [...comments];
    tmpComments.splice(idx, 1);
    setComments(tmpComments);
  }

  return (
    <div className="commentBox" key={idx}>
      <div className="comment">
        <span className="userName">{nickname || myName}</span>
        {comment}
      </div>
      <div className="commentImgBox">
        {close ? (
          <img
            onClick={() => {
              onRemove();
            }}
            src="./images/Mun/close.png"
            className="commentClose"
            alt="tmp"
          />
        ) : null}
        <img
          onClick={e => commentHeart(e)}
          src={heartSrc[1]}
          className="commentHeart"
          alt="tmp"
        />
      </div>
    </div>
  );
};

export default Comment;
