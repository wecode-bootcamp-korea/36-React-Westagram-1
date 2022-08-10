import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './login.scss';

const Login = () => {
  const [info, setInfo] = useState({
    userEmail: '',
    userPassword: '',
  });
  // const [isActive, setIsActive] = useState(false);

  // const isPassedLogin = () => {
  //   return info.userEmail.includes('@') && info.userPassword.length > 4
  //     ? setIsActive(true)
  //     : setIsActive(false);
  // };

  const saveUserId = e => {
    e.preventDefault();
    const value = e.target.value;
    const ID = e.target.id;
    // const {value,id} = e.target
    setInfo({
      ...info,
      [ID]: value,
    });
  };

  const navigate = useNavigate();

  // const goToMain = () => {
  //   navigate('/main-lee');
  // };
  //함수형에서는 this 바인딩 쓰기 하는데 호출시 this형식으로 부르지 않는다? -> let's figure it out.

  const request = e => {
    e.preventDefault();
    fetch('http://10.58.0.32:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: info.userEmail,
        password: info.userPassword,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        localStorage.setItem('acesstoken', JSON.stringify(result));
      });
    if (localStorage.acesstoken) {
      navigate('/main-lee');
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1 className="big-text">Westagram</h1>
        <form>
          <label>Email</label>
          <input
            className="inputClass"
            value={info.userEmail}
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            // onKeyUp={isPassedLogin}
          />
          <label>Password</label>
          <input
            className="inputClass"
            id="userPassword"
            value={info.userPassword}
            type="userPassword"
            name="userPassword"
            s
            placeholder="비밀번호"
            required
            onChange={saveUserId}
            // onKeyUp={isPassedLogin}
          />
          <input
            className="activeBtn"
            onClick={request}
            type="submit"
            // disabled={
            //   info.userEmail.includes('@') && info.userPassword.length > 4
            //     ? false
            //     : true
            // }
            value="로그인"
          />

          <button type="submit" className="btn">
            <Link to="/signup-lee" className="link">
              회원가입하러 가기
            </Link>
          </button>
        </form>
        <footer>
          <Link to="/main-lee" className="link">
            비밀번호를 잊으셨나요?
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
