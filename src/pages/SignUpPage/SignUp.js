import styles from './SignUp.module.css';
import { useState, useRef } from 'react';

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
    <div className={styles.SingUpPage}>
      <div className={styles.SignUp}>회원가입</div>
      <div className={styles.infoBtn}>
        <div className={styles.info}>
          <div className={styles.name}>
            <span> 이름 </span>
            <input
              ref={nameInput}
              name="name"
              value={state.name}
              onChange={handleChangeState}
            />
          </div>
          <div className={styles.idCheck}>
            <div className={styles.id}>
              <span> 아이디 </span>
              <input
                ref={idInput}
                name="id"
                value={state.id}
                onChange={handleChangeState}
              />
            </div>
            <div className={styles.dup_id}>중복 아이디 확인</div>
          </div>
          <div className={styles.emailCheck}>
            <div className={styles.email}>
              <span> 이메일 </span>
              <input
                ref={emailInput}
                name="email"
                value={state.email}
                onChange={handleChangeState}
              />
            </div>
            <div className={styles.dup_email}>중복 이메일 확인</div>
          </div>
          <div className={styles.password}>
            <span> 비밀번호</span>
            <input
              ref={passwordInput}
              name="password"
              value={state.content}
              onChange={handleChangeState}
            />
          </div>
          <div className={styles.checkPw}>
            <span> 비밀번호 확인 </span>
            <input
              ref={checkPwInput}
              name="checkPw"
              value={state.checkPw}
              onChange={handleChangeState}
            />
          </div>
          <div className={styles.telephone}>
            <span> 전화번호 </span>
            <input
              ref={telephoneInput}
              name="telephone"
              value={state.telephone}
              onChange={handleChangeState}
            />
          </div>
        </div>
        <button onClick={handleSubmit} className={styles.SignUpnButton}>
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;
