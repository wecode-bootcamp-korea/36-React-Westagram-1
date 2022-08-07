import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [userIdSaved, setUserIdSaved] = useState(null);
  const [userPwSaved, setUserPwSaved] = useState(null);

  const saveUserId = event => {
    return setUserIdSaved((userIdSaved = event.target.value));
  };

  const saveUserPw = event => {
    return setUserPwSaved((userPwSaved = event.target.value));
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
            onChange={saveUserId}
          />
          <input
            className="passwordInput"
            type="password"
            placeholder="비밀번호"
            onChage={saveUserPw}
          />

          <button>로그인</button>
        </div>
        <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </body>
  );
};

export default Login;
