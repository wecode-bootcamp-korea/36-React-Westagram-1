import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

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

  const validation = (id, pw) => {
    return id.includes('@') && pw.length >= 5 ? false : true;
  };

  return (
    <div className="loginContainer">
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
          <button
            className="loginBtn"
            onClick={() => navigate('/main')}
            disabled={validation(id, pw)}
          >
            로그인
          </button>
        </form>
        <a href="null">비밀번호를 잊으셨나요?</a>
      </div>

      <div className="signupContainer">
        <p>
          계정이 없으신가요? <Link to="/Main">가입하기</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
