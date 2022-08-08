import React from 'react';
import './Comment.scss';
import { useState } from 'react';

const Comment = props => {
  const [heartSrc, setHeartSrc] = useState([true, './images/Mun/heart.png']);
  const [isShow, setIsShow] = useState(true);

  function commentHeart(e) {
    heartSrc[0]
      ? setHeartSrc([false, './images/Mun/redHeart.png'])
      : setHeartSrc([true, './images/Mun/heart.png']);
  }

  return isShow ? (
    <div className="commentBox" key={props.idx}>
      <div className="comment">
        <span className="userName">{props.nickname || props.myName}</span>
        {props.comment}
      </div>
      <div className="commentImgBox">
        {props.new ? (
          <img
            onClick={() => {
              setIsShow(false);
            }}
            src={'./images/Mun/close.png'}
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
  ) : null;
};

export default Comment;
