import React, { useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setId(e.target.value);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-lee');
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1 className="big-text">Westagram</h1>
        <div className="sub_container">
          <input
            className="inputClass"
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="inputClass"
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <button className="btn" onClick={goToMain} type="button">
            로그인
          </button>
        </div>
        <footer>
          <Link to="/signup-lee">비밀번호를 잊으셨나요?</Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
