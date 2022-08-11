import React, { useEffect, useState } from 'react';
import './signup.scss';

const Signup = () => {
  const [input, setInput] = useState({
    userEmail: '',
    userPassword: '',
  });

  const [isActive, setIsActive] = useState(false);

  const changeHandler = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const isPassedLogin = () => {
    return input.userEmail.length > 5 && input.userPassword.length > 5
      ? setIsActive(true)
      : setIsActive(false);
  };

  const request = e => {
    e.preventDefault();
    fetch('https://westagram-signup.herokuapp.com/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: input.userEmail,
        password: input.userPassword,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
      });
  };

  return (
    <div className="login-container">
      <div className="signup">
        <h1 className="big-text">
          Welcome to Westa!
          <h4 className="text-h4">
            회원가입하시고 다양한 서비스를 만나보세요!
          </h4>
        </h1>

        <form>
          <label>Email</label>
          <input
            className="inputClass"
            type="email"
            name="userEmail"
            id="user"
            value={input.userEmail}
            onChange={changeHandler}
            onKeyUp={isPassedLogin}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <label>Password</label>
          <input
            className="inputClass"
            id="password"
            type="userPassword"
            name="userPassword"
            value={input.userPassword}
            onChange={changeHandler}
            onKeyUp={isPassedLogin}
            placeholder="비밀번호"
            required
          />
          <label>check Password</label>
          <button
            type="submit"
            className={isActive ? 'activeBtn' : 'unactiveBtn'}
            onClick={request}
            disabled={
              input.userEmail.length > 5 && input.userPassword.length > 5
                ? false
                : true
            }
          >
            회원가입 신청
          </button>
          <button type="submit" className="btn">
            뒤로 가기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
