import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  let btnDisabled = true;

  function saveUserId(e) {
    e.target.id === 'id' ? setId(e.target.value) : setPassword(e.target.value);
  }

  function validation() {
    if (id?.includes('@') && password?.length > 4) {
      btnDisabled = false;
      return 'loginButtonActive';
    } else {
      btnDisabled = true;
      return 'loginButton';
    }
  }

  return (
    <div className="loginContainer">
      <h1 className="loginTitle">westagram</h1>
      <div className="loginBox">
        <input
          onChange={e => {
            saveUserId(e);
          }}
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
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
        className={validation()}
        onClick={() => {
          navigate('/main-mun');
        }}
        disabled={btnDisabled}
      >
        로그인
      </button>
    </div>
  );
}
export default Login;
