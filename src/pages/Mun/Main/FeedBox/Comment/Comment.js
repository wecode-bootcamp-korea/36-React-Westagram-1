import React from 'react';
import './Comment.scss';
import { useState } from 'react';

const Comment = props => {
  const [heartSrc, setHeartSrc] = useState([true, './images/Mun/heart.png']);

  function commentHeart(e) {
    heartSrc[0]
      ? setHeartSrc([false, './images/Mun/redHeart.png'])
      : setHeartSrc([true, './images/Mun/heart.png']);
  }

  return (
    <div className="commentBox" key={props.idx}>
      <div className="comment">
        <span className="userName">{props.nickname || props.myName}</span>
        {props.comment}
      </div>
      <div className="commentImgBox">
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
