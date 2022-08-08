import React from 'react';
import './Comment.scss';
import { useState } from 'react';

const Comment = props => {
  const [heartSrc, setHeartSrc] = useState([true, './images/Mun/heart.png']);

  function commentHeart() {
    heartSrc[0]
      ? setHeartSrc([false, './images/Mun/redHeart.png'])
      : setHeartSrc([true, './images/Mun/heart.png']);
  }

  function onRemove() {
    let tmpComments = [...props.comments];
    tmpComments.splice(props.idx, 1);
    props.setComments(tmpComments);
  }

  return (
    <div className="commentBox" key={props.idx}>
      <div className="comment">
        <span className="userName">{props.nickname || props.myName}</span>
        {props.comment}
      </div>
      <div className="commentImgBox">
        {props.new ? (
          <img
            onClick={() => {
              onRemove();
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
  );
};

export default Comment;
