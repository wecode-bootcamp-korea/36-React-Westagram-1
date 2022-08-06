import React, { useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  //각 인풋에 keyup이 됐고 각 id와 Password의 value를 확인하고 부합하면 true
  //isActive의 값에 따라 className을 다르게 주면 가능
  const isPassedLogin = () => {
    return id.includes('@') && password.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPassword(e.target.value);
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
            value={id}
            type="email"
            name="userEmail"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            onKeyUp={isPassedLogin}
          />
          <label>Password</label>
          <input
            className="inputClass"
            id="password"
            value={password}
            type="userPassword"
            name="userPassword"
            placeholder="비밀번호"
            required
            onChange={saveUserPw}
            onKeyUp={isPassedLogin}
          />
          <input
            className={isActive ? 'activeBtn' : 'unactiveBtn'}
            onClick={goToMain}
            type="submit"
            disabled={id.includes('@') && password.length > 4 ? false : true}
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
