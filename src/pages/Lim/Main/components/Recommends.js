import React from 'react';
import Recommend from './Recommend';
import './Storys.scss';

function Recommends() {
  return (
    <section className="side recommend">
      <div className="sideBox">
        <p className="sideBoxName">회원님을 위한 추천</p>
        <p className="sideBoxMore">모두보기</p>
      </div>
      <div className="userList">
        <Recommend />
        <Recommend />
        <Recommend />
        <Recommend />
      </div>
    </section>
  );
}

export default Recommends;
