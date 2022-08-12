import React from 'react';
import './CommentList.scss';

const CommentList = ({ listNumber, comment, userMainId }) => {
  return (
    <p key={listNumber}>
      <span>{userMainId}</span>&nbsp;{comment}
    </p>
  );
};

export default CommentList;
