import React from 'react';
import './Story.scss';

function Recommend() {
  return (
    <div className="user">
      <img className="userImg" src="/images/Lim/petty.jpeg" alt="user image" />
      <div className="userIdInfo">
        <p className="userId">petty</p>
        <p className="userInfo">crong님이 팔로우 중</p>
      </div>
    </div>
  );
}

export default Recommend;
