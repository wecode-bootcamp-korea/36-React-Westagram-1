import React from 'react';

const Comment = props => {
  return (
    <div className="commentBox">
      <div className="comment">
        <span className="userName">fsd</span>
        {props.contents}
      </div>
      <div className="commentImgBox">
        <img src="./images/Mun/heart.png" className="commentHeart" alt="tmp" />
      </div>
    </div>
  );
};

export default Comment;
