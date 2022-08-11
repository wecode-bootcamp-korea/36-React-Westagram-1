import React from 'react';
import CommentItem from './CommentItem';
import './CommentBoard.scss';

// Review: 구조분해할당
const CommentBoard = ({comment}) => {

  return (
    <ul className="commentText">
      {comment.map((item, idx) => (
        // Review: index를 key로 사용하면 안되는 이유
        <CommentItem item={item} key={idx} />
      ))}
    </ul>
  );
};

export default CommentBoard;
