import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="mainLogo">
        <i className="fa-brands fa-instagram" />
        <div className="logoLine" />
        <h1>Westagram</h1>
      </div>

      <input className="search" type="text" placeholder="검색" />

      <div className="mainMenu">
        <img
          className="menuImg explore"
          src="/images/explore.png"
          alt="explore"
        />
        <img className="menuImg herat" src="/images/heart.png" alt="heart" />
        <img
          className="menuImg profile"
          src="/images/profile.png"
          alt="profile"
        />
      </div>
    </nav>
  );
};

export default Nav;
