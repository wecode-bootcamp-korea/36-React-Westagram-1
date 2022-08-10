import React from 'react';
import './CommentList.scss';

const CommentList = props => {
  let userInfo = props;
  return (
    <p key={userInfo.listNumber}>
      <span>{userInfo.userMainId}</span>&nbsp;{userInfo.comment}
    </p>
  );
};

export default CommentList;
