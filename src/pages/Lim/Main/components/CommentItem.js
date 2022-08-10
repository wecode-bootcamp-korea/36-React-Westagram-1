import React from 'react';
import './CommentItem.scss';

const CommentItem = props => {
  return (
    <li>
      <p className="commentUserId">forest_xox</p>
      <p className="commentUserText">{props.item}</p>
    </li>
  );
};

export default CommentItem;
