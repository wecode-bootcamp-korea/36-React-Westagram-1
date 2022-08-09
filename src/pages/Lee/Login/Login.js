import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
  const [info, setInfo] = useState({
    user: '',
    password: '',
  });
  const [isActive, setIsActive] = useState(false);

  const isPassedLogin = () => {
    return info.user.includes('@') && info.password.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  const saveUserId = e => {
    const value = e.target.value;
    const ID = e.target.id;
    setInfo({
      ...info,
      [ID]: value,
    });
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-lee');
  };
  //함수형에서는 this 바인딩 쓰기 하는데 호출시 this형식으로 부르지 않는다? -> let's figure it out.

  return (
    <div className="login-container">
      <div className="login">
        <h1 className="big-text">Westagram</h1>
        <form>
          <label>Email</label>
          <input
            className="inputClass"
            value={info.user}
            type="email"
            name="userEmail"
            id="user"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            onKeyUp={isPassedLogin}
          />
          <label>Password</label>
          <input
            className="inputClass"
            id="password"
            value={info.password}
            type="userPassword"
            name="userPassword"
            placeholder="비밀번호"
            required
            onChange={saveUserId}
            onKeyUp={isPassedLogin}
          />
          <input
            className={isActive ? 'activeBtn' : 'unactiveBtn'}
            onClick={goToMain}
            type="submit"
            disabled={
              info.user.includes('@') && info.password.length > 4 ? false : true
            }
            value="로그인"
          />
        </form>
        <footer>
          <Link to="/signup-lee">비밀번호를 잊으셨나요?</Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
