import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
    const [id,setId] = useState(null)
    const [password,setPassword] = useState(null)

    const navigate = useNavigate();

    function saveUserId(e){
        setId(e.target.value);
    }

    function saveUserPassword(e){
        setPassword(e.target.value);
    }

    return (
            <div className="loginContainer">
                <h1 className="loginTitle">
                    westagram
                </h1>
                <div className="loginBox">
                    <input onChange={(e)=>{saveUserId(e)}} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" id="id" />
                    <input onChange={(e)=>{saveUserPassword(e)}} type="password" placeholder="비밀번호" id="password" />
                </div>
                <button id="loginButton" onClick={()=>{navigate('/main')}}>
                            로그인
                </button>
                <div id="error">
                </div>
                <a href="" className="question">비밀번호를 잊으셨나요?</a>
            </div>
    );
}

export default Login;