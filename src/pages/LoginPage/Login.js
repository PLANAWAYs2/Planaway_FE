import './Login.css';
import { useState, useRef } from 'react';
const Login = () => {
  const idInput = useRef();
  const passwordInput = useRef();

  const [state, setState] = useState({
    id: '',
    password: '',
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.id.length < 1) {
      idInput.current.focus();
      return;
    }

    if (state.password.length < 1) {
      passwordInput.current.focus();
      return;
    }
  };

  return (
    <div className="LoginPage">
      <div className="Login">로그인</div>
      <div className="info">
        <div className="idPwBtn">
          <div className="idPw">
            <div className="id">
              <span> 아이디 </span>
              <input
                ref={idInput}
                name="id"
                value={state.id}
                onChange={handleChangeState}
              />
            </div>
            <div className="password">
              <span> 비밀번호</span>
              <input
                ref={passwordInput}
                name="password"
                value={state.content}
                onChange={handleChangeState}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className="LoginButton">
            로그인
          </button>
        </div>
        <div className="add">
          <div className="Signup">
            <span>아직 계정이 없으신가요?</span>
            <button>회원가입</button>
          </div>
          <div className="FindPw">
            <span>혹시 비밀번호를 잊으셨나요?</span>
            <button>비밀번호 찾기</button>
          </div>
        </div>
      </div>
      <div className="line1"></div>
      <div className="anotherWay">
        <span>다른 방법으로 로그인</span>
        <button>
          <img src="./img/google.png"></img>
          <div className="line2"></div>
          <div className="googleLogin">구글 아이디로 로그인</div>
        </button>
      </div>
    </div>
  );
};

export default Login;
