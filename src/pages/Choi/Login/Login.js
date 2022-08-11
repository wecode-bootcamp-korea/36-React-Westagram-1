import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  let [userIdSaved, setUserIdSaved] = useState('');
  let [userPwSaved, setUserPwSaved] = useState('');
  const userIdSet = event => {
    return setUserIdSaved(event.target.value);
  };

  const userPwSet = event => {
    setUserPwSaved(event.target.value);
  };
  console.log(userIdSaved, userPwSaved);
  const inputValid = userIdSaved.includes('@') && userPwSaved.length > 5;

  const fetchUserInfo = () => {
    fetch('http://10.58.0.55:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userIdSaved,
        password: userPwSaved.toString(),
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const fetchUserLogin = () => {
    fetch('http://10.58.0.55:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: userPwSaved.toString(),
        email: userIdSaved,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.message === 'bool') {
          localStorage.setItem('token', result.accessToken);
        } else {
          alert('아이디나 비밀번호를 확인해주세요');
        }
      });
  };

  return (
    <body className="loginBody">
      <div className="objectTranslate">
        <header>Westagram</header>
        <div className="login">
          <input
            className="userName"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={userIdSet}
          />
          <input
            className="passwordInput"
            type="password"
            placeholder="비밀번호"
            onChange={userPwSet}
          />

          <button
            className={inputValid ? 'btnActive' : 'btnInactive'}
            disabled={inputValid ? false : true}
            onClick={fetchUserLogin}
          >
            로그인
          </button>
        </div>
        <button onClick={fetchUserInfo}>회원가입</button>
        <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </body>
  );
};

export default Login;
