import React from 'react';
import './Nav2.scss';
const Nav = ({ setSearch }) => {
  function saveSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <nav className="navbar">
      <div className="leftLogo">
        <img src="images/Mun/instagram.png" alt="tmp" className="leftLogoImg" />
        | westagram
      </div>
      <input
        onChange={e => {
          saveSearch(e);
        }}
        className="navInput"
        type="text"
        placeholder="검색"
      />
      <div className="rigthMenu">
        <img src="images/explore.png" alt="tmp" />
        <img src="images/heart.png" alt="tmp" />
        <img src="images/profile.png" alt="tmp" />
      </div>
    </nav>
  );
};

export default Nav;
