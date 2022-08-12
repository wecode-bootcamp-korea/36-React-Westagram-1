import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [user, setUser] = useState({
    userId: '',
    userPw: '',
  });

  const saveUser = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const isUserInputValid = user.userId.includes('@') && user.userPw.length > 5;

  const fetchUserInfo = () => {
    fetch('http://10.58.0.55:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.userId,
        password: user.userPw.toString(),
      }),
    });
  };

  const fetchUserLogin = () => {
    fetch('http://10.58.0.55:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: user.userPw.toString(),
        email: user.userId,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'bool') {
          localStorage.setItem('token', result.accessToken);
        } else {
          alert('아이디나 비밀번호를 확인해주세요');
        }
      });
  };

  return (
    <div className="loginBody">
      <div className="objectTranslate">
        <header>Westagram</header>
        <div className="login">
          <input
            className="userName"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUser}
            id="userId"
          />
          <input
            className="passwordInput"
            type="password"
            placeholder="비밀번호"
            id="userPw"
            onChange={saveUser}
          />

          <button
            className={isUserInputValid ? 'btnActive' : 'btnInactive'}
            disabled={!isUserInputValid}
            onClick={fetchUserLogin}
          >
            로그인
          </button>
        </div>
        <button onClick={fetchUserInfo}>회원가입</button>
        <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
};

export default Login;
