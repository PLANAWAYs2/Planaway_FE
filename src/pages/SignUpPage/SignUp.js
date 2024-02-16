import './SignUp.css';
import { useState, useRef } from 'react';
import Header from '../../components/Header';
import { Container } from '../../Layout';

const SignUp = () => {
  const nameInput = useRef();
  const idInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const checkPwInput = useRef();
  const telephoneInput = useRef();

  const [state, setState] = useState({
    name: '',
    id: '',
    email: '',
    password: '',
    checkPw: '',
    telephone: '',
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.name.length < 1) {
      nameInput.current.focus();
      return;
    }

    if (state.id.length < 1) {
      idInput.current.focus();
      return;
    }

    if (state.email.length < 1) {
      emailInput.current.focus();
      return;
    }

    if (state.password.length < 1) {
      passwordInput.current.focus();
      return;
    }

    if (state.checkPw.length < 1) {
      checkPwInput.current.focus();
      return;
    }

    if (state.telephone.length < 1) {
      telephoneInput.current.focus();
      return;
    }
    alert('회원가입이 완료되었습니다.');
  };

  return (
    <Container>
      <Header />

      <div className="SUSingUpPage">
        <div className="SUSignUp">회원가입</div>
        <div className="SUinfoBtn">
          <div className="SUinfo">
            <div className="SUname">
              <span> 이름 </span>
              <input
                ref={nameInput}
                name="name"
                value={state.name}
                onChange={handleChangeState}
              />
            </div>
            <div className="SUidCheck">
              <div className="SUid">
                <span> 아이디 </span>
                <input
                  ref={idInput}
                  name="id"
                  value={state.id}
                  onChange={handleChangeState}
                />
              </div>
              <button className={'SUdup_idButton'}>중복 아이디 확인</button>
            </div>
            <div className="SUemailCheck">
              <div className="SUemail">
                <span> 이메일 </span>
                <input
                  ref={emailInput}
                  name="email"
                  value={state.email}
                  onChange={handleChangeState}
                />
              </div>
              <button className="SUdup_emailButton">중복 이메일 확인</button>
            </div>
            <div className="SUpassword">
              <span> 비밀번호</span>
              <input
                ref={passwordInput}
                name="password"
                value={state.content}
                onChange={handleChangeState}
              />
            </div>
            <div className="SUcheckPw">
              <span> 비밀번호 확인 </span>
              <input
                ref={checkPwInput}
                name="checkPw"
                value={state.checkPw}
                onChange={handleChangeState}
              />
            </div>
            <div className="SUtelephone">
              <span> 전화번호 </span>
              <input
                ref={telephoneInput}
                name="telephone"
                value={state.telephone}
                onChange={handleChangeState}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className="SUSignUpnButton">
            가입하기
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
