import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  let [userIdSaved, setUserIdSaved] = useState('');
  let [userPwSaved, setUserPwSaved] = useState('');
  const userIdSet = event => {
    return setUserIdSaved(event.target.value);
  };

  const userPwSet = event => {
    console.log(event.target.value);
    setUserPwSaved(event.target.value);
  };

  console.log(userPwSaved);

  const inputValid = userIdSaved.includes('@') && userPwSaved.length > 5;
  console.log(inputValid);

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
            style={
              inputValid
                ? { backgroundColor: 'blue' }
                : { backgroundColor: '#acd0e6f' }
            }
            disabled={inputValid ? false : true}
          >
            로그인
          </button>
        </div>
        <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </body>
  );
};

export default Login;
