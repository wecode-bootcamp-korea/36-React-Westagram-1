import './Login.scss'

function Login() {
    return (
            <div className="loginContainer">
                <h1 className="loginTitle">
                    westagram
                </h1>
                <div className="loginBox">
                    <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" id="id" />
                    <input type="password" placeholder="비밀번호" id="password" />
                </div>
                <button id="loginButton">
                            로그인
                </button>
                <div id="error">
                </div>
                <a href="" className="question">비밀번호를 잊으셨나요?</a>
            </div>
    );
}

export default Login;