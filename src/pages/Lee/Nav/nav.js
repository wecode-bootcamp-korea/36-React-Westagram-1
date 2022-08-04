import React from 'react';
import './nav.scss';

const Nav = () => {
  return (
    <header className="Nav">
      <nav className="navClass">
        <div className="first__box ">
          <i className="uil uil-instagram icon" />
          <h1 className="head">Westagram</h1>
        </div>

        <div className="second__box ">
          <input className="input1" type="text" placeholder="검색" />
          <i className="uil uil-search input_search" />
        </div>

        <div className="third__box ">
          <div>
            <i className="uil uil-heart-alt icon" />
            <div className="dot" />
          </div>
          <i className="uil uil-compass icon" />
          <i className="uil uil-user icon" />
          <img
            className="img__round-small"
            src="images/Lee/프3.jpeg"
            alt="프로필"
          />
        </div>
      </nav>
    </header>
  );
};

//다른데서 쓰려고 하니깐 main의 mixin과 변수때문에 복잡해졌다.
// mixin을 빼는 것도 좋을 것 같다.

export default Nav;
