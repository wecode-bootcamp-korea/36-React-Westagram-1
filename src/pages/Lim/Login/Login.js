import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const saveUserId = event => {
    setId(event.target.value);
  };
  const [pw, setPw] = useState('');
  const saveUserPw = event => {
    setPw(event.target.value);
  };
  return (
    <>
      <div className="loginBox">
        <h1 className="loginLogo">Westagram</h1>
        <form className="loginForm">
          <input
            className="id input"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            value={id}
          />

          <input
            className="pw input"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
            value={pw}
          />
          <button className="loginBtn" onClick={() => navigate('/main')}>
            로그인
          </button>
        </form>
        <a href="">비밀번호를 잊으셨나요?</a>
      </div>
      <script defer src="js/login.js" />
    </>
  );
}

export default Login;
