import React from 'react';
import './Story.scss';

function Recommend() {
  return (
    <div className="user">
      <img className="userImg" src="/images/Lim/user.jpg" alt="user image" />
      <div className="userIdInfo">
        <p className="userId">Lucas_213</p>
        <p className="userInfo">Grayson 팔로우 중</p>
      </div>
    </div>
  );
}

export default Recommend;
