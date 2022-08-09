import React from 'react';

const CommentList = props => {
  let userInfo = props;
  console.log('list', props);
  return (
    <p key={userInfo.listNumber}>
      <span>{userInfo.userMainId}</span>&nbsp;{userInfo.comment}
    </p>
  );
};

export default CommentList;
