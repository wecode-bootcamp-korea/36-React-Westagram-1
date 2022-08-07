import React from 'react';
import './Aside.scss';

const Aside = props => {
  return (
    <aside className="main-right">
      <div className="user">
        <div className="userPicAndId">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="user"
          />
          <div className="userName">
            <p className="useId">{props.mainUserId}</p>
            <p className="userNick">{props.mainUserName}</p>
          </div>
        </div>
        <p className="changeAccount">전환</p>
      </div>
      <div className="userList">
        <div className="friendListTitle">
          <p>회원님을 위한 추천</p>
          <p className="expandList">모두 보기</p>
        </div>
        <ul>
          <li className="friendUser1">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="user"
            />
            <p>titanic</p>
          </li>
          <li className="friendUser1">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="user"
            />
            <p>terminator</p>
          </li>
          <li className="friendUser1">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="user"
            />
            <p>harry_potter</p>
          </li>
          <li className="friendUser1">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="user"
            />
            <p>harry_pothead</p>
          </li>
          <li className="friendUser1">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="user"
            />
            <p>hairy_potter</p>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
