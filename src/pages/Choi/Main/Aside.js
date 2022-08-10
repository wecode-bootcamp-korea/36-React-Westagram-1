import React from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

const Aside = props => {
  let userInfo = props;

  const LINK_MENU = [
    { key: 0, link: '', menuName: '소개' },
    { key: 1, link: '', menuName: '도움말' },
    { key: 2, link: '', menuName: '홍보센터' },
    { key: 3, link: '', menuName: 'API' },
    { key: 4, link: '', menuName: '채용정보' },
    { key: 5, link: '', menuName: '개인정보처리방침' },
    { key: 6, link: '', menuName: '약관' },
    { key: 7, link: '', menuName: '위치' },
    { key: 8, link: '', menuName: '인기 계정' },
    { key: 9, link: '', menuName: '해시태그' },
    { key: 10, link: '', menuName: '언어' },
  ];

  return (
    <aside className="main-right">
      <div className="user">
        <div className="userPicAndId">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="user"
          />
          <div className="userName">
            <p className="useId">{userInfo.mainUserId}</p>
            <p className="userNick">{userInfo.mainUserName}</p>
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
      <div>
        <ul className="linkMenu">
          {LINK_MENU.map(obj => {
            return (
              <li key={obj.key}>
                <Link to={obj.link} className="menuName">
                  {obj.menuName}
                </Link>
                <span>&#x2022;</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
