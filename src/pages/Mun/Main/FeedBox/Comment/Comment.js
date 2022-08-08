import React from 'react';
import './Comment.scss';

const Comment = props => {
  return props.comments.map((comment, idx) => {
    return (
      <div className="commentBox" key={idx}>
        <div className="comment">
        <span className="userName">{props.nickname || 'nyam_nyam2'}</span>{comment}
        </div>
        <div className="commentImgBox">
          <img
            src="./images/Mun/heart.png"
            className="commentHeart"
            alt="tmp"
          />
        </div>
      </div>
    );
  });
};

export default Comment;
