import './UserInfo.css';
import { useState, useRef } from 'react';
import Header from '../../components/Header';
import { Container } from '../../Layout';

const UserInfo = () => {
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
    alert('프로필 수정이 완료되었습니다.');
  };

  return (
    <>
      <Header />
      <Container>
        <div className="UIUserInfoPage">
          <div className="UIUserInfo">프로필 수정</div>
          <div className="UIinfoBtn">
            <div className="UIinfo">
              <div className="UIPfp">
                <span>프로필 사진</span>
                <img
                  src={process.env.PUBLIC_URL + '/assets/프로필.jpeg'}
                  alt="사진"
                  className="UIPfpPicture"
                ></img>
                <div className="UIPfpButton">
                  <button className="UIPfpEditBtn">변경</button>
                  <button className="UIPfpRemoveBtn">삭제</button>
                </div>
              </div>
              <div className="UIname">
                <span> 이름 </span>
                <input
                  ref={nameInput}
                  name="name"
                  value={state.name}
                  onChange={handleChangeState}
                />
              </div>
              <div className="UIidCheck">
                <div className="UIid">
                  <span> 아이디 </span>
                  <input
                    ref={idInput}
                    name="id"
                    value={state.id}
                    onChange={handleChangeState}
                  />
                </div>
                <button className={'UIdup_idButton'}>중복 아이디 확인</button>
              </div>
              <div className="UIemailCheck">
                <div className="UIemail">
                  <span> 이메일 </span>
                  <input
                    ref={emailInput}
                    name="email"
                    value={state.email}
                    onChange={handleChangeState}
                  />
                </div>
                <button className="UIdup_emailButton">중복 이메일 확인</button>
              </div>
              <div className="UIpassword">
                <span> 비밀번호</span>
                <input
                  ref={passwordInput}
                  name="password"
                  value={state.content}
                  onChange={handleChangeState}
                />
              </div>
              <div className="UIcheckPw">
                <span> 비밀번호 확인 </span>
                <input
                  ref={checkPwInput}
                  name="checkPw"
                  value={state.checkPw}
                  onChange={handleChangeState}
                />
              </div>
              <div className="UItelephone">
                <span> 전화번호 </span>
                <input
                  ref={telephoneInput}
                  name="telephone"
                  value={state.telephone}
                  onChange={handleChangeState}
                />
              </div>
            </div>
            <button onClick={handleSubmit} className="UISignUpnButton">
              변경사항 저장
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserInfo;
