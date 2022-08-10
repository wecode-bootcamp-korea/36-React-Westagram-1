import React from 'react';
import './Story.scss';

function Story() {
  return (
    <div className="user">
      <img className="userImg" src="/images/Lim/loopy.jpeg" alt="user image" />
      <div className="userIdInfo">
        <p className="userId">loopy</p>
        <p className="userInfo">3시간 전</p>
      </div>
    </div>
  );
}

export default Story;
