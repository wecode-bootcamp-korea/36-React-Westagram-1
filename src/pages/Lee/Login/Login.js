import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
  const [infos, setInfo] = useState({
    userEmail: '',
    userPassword: '',
  });
  const [isActive, setIsActive] = useState(false);

  const isPassedLogin = () => {
    return infos.userEmail.includes('@') && infos.userPassword.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  const saveUserId = e => {
    e.preventDefault();
    const value = e.target.value;
    const ID = e.target.id;
    // const {value,id} = e.target
    setInfo({
      ...infos,
      [ID]: value,
    });
  };

  const navigate = useNavigate();

  const request = e => {
    e.preventDefault();
    fetch('https://westagram-signup.herokuapp.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: infos.userEmail,
        password: infos.userPassword,
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
      alert(`주영님 로그인에 성공하셨습니다.`);
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
            value={infos.userEmail}
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            onKeyUp={isPassedLogin}
          />
          <label>Password</label>
          <input
            className="inputClass"
            id="userPassword"
            value={infos.userPassword}
            type="userPassword"
            name="userPassword"
            s
            placeholder="비밀번호"
            required
            onChange={saveUserId}
            onKeyUp={isPassedLogin}
          />
          <input
            className={isActive ? 'activeBtn' : 'unactiveBtn'}
            onClick={request}
            type="submit"
            disabled={
              infos.userEmail.includes('@') && infos.userPassword.length > 4
                ? false
                : true
            }
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
