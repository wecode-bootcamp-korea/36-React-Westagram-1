import React from 'react';
import Story from './Story';
import './Storys.scss';

function Storys() {
  return (
    <section className="side story">
      <div className="sideBox">
        <p className="sideBoxName">스토리</p>
        <p className="sideBoxMore">모두보기</p>
      </div>
      <div className="userList">
        <Story />
        <Story />
        <Story />
      </div>
    </section>
  );
}

export default Storys;
