import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  // Review: 동작 안함
  // Review: 변수명
  const isUserInputValid = userId['id'].includes('@') && userId['password'].length > 4

  // Review: camelCase
  const [userId, setuserId] = useState({
    id: '',
    password: '',
  });

  function saveUserId(e) {
    setuserId({ ...userId, [e.target.id]: e.target.value });
  }

  // Review: 함수의 기능이 중첩되어 있음
  // Btn Disabled
  // loginButtonClassName

  return (
    <div className="loginContainer">
      <h1 className="loginTitle">westagram</h1>
      <form>
        <div className="loginBox">
          <input
            onChange={e => {
              saveUserId(e);
            }}
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            // Review: ID Selector
            id="id"
          />
          <input
            onChange={e => {
              saveUserId(e);
            }}
            type="password"
            placeholder="비밀번호"
            id="password"
          />
        </div>
        <button
          className={isUserInputValid ? "loginButtonActive" : "loginButton"}
          onClick={() => {
            navigate('/main-mun');
          }}
          disabled={!isUserInputValid}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
