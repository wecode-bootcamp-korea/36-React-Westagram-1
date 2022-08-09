import React from 'react';
import { Link } from 'react-router-dom';
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

const FOOTER_INFO = [
  { id: 1, content: '소개 ·', url: '/null' },
  { id: 2, content: '도움말 ·', url: '/null' },
  { id: 3, content: '홍보센터 ·', url: '/null' },
  { id: 4, content: 'API ·', url: '/null' },
  { id: 8, content: '채용 정보 ·', url: '/null' },
  { id: 5, content: '개인정보처리방침 ·', url: '/null' },
  { id: 6, content: '약관 ·', url: '/null' },
  { id: 7, content: '위치 ·', url: '/null' },
  { id: 10, content: '언어', url: '/null' },
];
