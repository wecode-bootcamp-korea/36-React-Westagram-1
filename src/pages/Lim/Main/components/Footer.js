import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_INFO } from './footerData';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      {FOOTER_INFO.map(info => {
        return (
          <li key={info.id}>
            <Link to={info.url}>{info.content}</Link>
          </li>
        );
      })}
      <p>© 2022 INSTAGRAM FROM META</p>
    </footer>
  );
}
export default Footer;
