import './Login.css';
import { useState, useRef } from 'react';
import Header from '../../components/Header';
import { Container } from '../../Layout';

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
    <>
      <Header />
      <Container>
        <div className="LLoginPage">
          <div className="LLogin">로그인</div>
          <div className="Linfo">
            <div className="LidPwBtn">
              <div className="LidPw">
                <div className="Lid">
                  <span> 아이디 </span>
                  <input
                    ref={idInput}
                    name="id"
                    value={state.id}
                    onChange={handleChangeState}
                  />
                </div>
                <div className="Lpassword">
                  <span> 비밀번호</span>
                  <input
                    ref={passwordInput}
                    name="password"
                    value={state.content}
                    onChange={handleChangeState}
                  />
                </div>
              </div>
              <button onClick={handleSubmit} className="LLoginButton">
                로그인
              </button>
            </div>
            <div className="Ladd">
              <div className="LSignup">
                <span>아직 계정이 없으신가요?</span>
                <button>회원가입</button>
              </div>
              <div className="LFindPw">
                <span>혹시 비밀번호를 잊으셨나요?</span>
                <button>비밀번호 찾기</button>
              </div>
            </div>
          </div>
          <div className="Lline1"></div>
          <div className="LanotherWay">
            <span>다른 방법으로 로그인</span>
            <button>
              <img src={process.env.PUBLIC_URL + '/assets/google.png'}></img>
              <div className="Lline2"></div>
              <div className="LgoogleLogin">구글 아이디로 로그인</div>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
