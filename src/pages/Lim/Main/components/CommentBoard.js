import React from 'react';
import CommentItem from './CommentItem';
import './CommentBoard.scss';

const CommentBoard = props => {
  return (
    <ul className="commentText">
      {props.comment.map((item, idx) => (
        <CommentItem item={item} key={idx} />
      ))}
    </ul>
  );
};

export default CommentBoard;
