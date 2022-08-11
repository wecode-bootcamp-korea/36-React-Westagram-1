import React from 'react';
import './NoticeBox.scss';
import { NOTICE_INFO_LIST } from './data';

const NoticeBox = () => {
  return (
    <footer className="noticeBox">
      <div className="noticeInfo">
        {NOTICE_INFO_LIST.map(info => (
          <span key={info.id}>
            {info.text}
            {info.id !== NOTICE_INFO_LIST.length ? '·' : null}
          </span>
        ))}
      </div>
      <div>ⓒ 2019 INSTAGRAM</div>
    </footer>
  );
};

export default NoticeBox;
