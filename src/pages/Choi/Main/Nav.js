import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="topLayer">
      <ul className="topLayerFeatures">
        <li className="title">Westagram</li>
        <li className="nav2">
          <input
            className="search"
            type="text"
            placeholder="검색"
            // onChange={searchLoader}
            // value={search}
          />
        </li>
        <li className="nav3">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="user"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
