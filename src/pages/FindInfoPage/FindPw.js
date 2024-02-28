import { useState } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container } from '../../Layout';
import './FindPw.css';
const FindPw = () => {
  const [stateMsg, setStateMsg] = useState('');

  return (
    <>
      <Header />;
      <Container>
        <div className="FPFindPW">
          <div className="FPText">비밀번호 찾기</div>
          <div className="FPInput">
            <Input
              text="이메일"
              btnText="이메일 전송하기"
              type="email_verify"
              setStateMsg={setStateMsg}
              btnState="true"
            />
            <Input
              text="인증번호"
              btnText="인증번호 확인"
              type="verify"
              setStateMsg={setStateMsg}
              btnState="true"
            />
            <Input text="새 비밀번호" type="password" btnState="false" />
            <Input
              text="새 비밀번호 확인"
              type="passwordCheck"
              btnState="false"
            />
            <div className="FPCheckBtn">
              <button>비밀번호 변경하기</button>
            </div>
          </div>
          <div className="FPDescription">{stateMsg}</div>
        </div>
      </Container>
    </>
  );
};

export default FindPw;
