import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  // Review: 안쓰는 변수 제거
  const navigate = useNavigate();

  // Review: input state 합치기
  const [id, setId] = useState('');
  const saveUserId = event => {
    setId(event.target.value);
  };

  const [pw, setPw] = useState('');
  const saveUserPw = event => {
    setPw(event.target.value);
  };

  // 연관성이 얼마나 있는지(응집도)
  const [userInput, setUserInput] = useState({
    id:"",
    pw:""
  })
  const handleUserInput = (event) => {
    // id
    // pw
    // 계산된 속성명
    setUserInput({
      ...userInput,
      [event.target.name]:event.target.value,
    })
  }

  const validation = (id, pw) => {
    // Review: 불필요한 삼항 연산자
    return !(id.includes('@') && pw.length >= 5)
  };

  const signIn = e => {
    e.preventDefault();
    fetch('http://10.58.5.66:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  // Review: console 삭제
  console.log(id, pw);

  return (
    // Review: className
    <div>
      <div className="loginBox">
        <h1 className="loginLogo">Westagram</h1>
        <form className="loginForm">
          <input
            className="id input"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleUserInput}
            value={id}
            name="id"
          />

          <input
            className="pw input"
            type="password"
            placeholder="비밀번호"
            onChange={handleUserInput}
            value={pw}
            name="pw"
          />
          <button
            className="loginBtn"
            // onClick={() => navigate('/main-lim')}
            onClick={signIn}
            disabled={validation(id, pw)}
          >
            로그인
          </button>
        </form>
        <a href="null">비밀번호를 잊으셨나요?</a>
      </div>

      <div className="signupContainer">
        <p>
          계정이 없으신가요? <Link to="">가입하기</Link>
        </p>
      </div>
        </>
  );
}

export default Login;
