import { useState } from 'react';
import './Input.css';

const Input = ({ text, btnText, type, setStateMsg, btnState }) => {
  const [state, setState] = useState('');

  const onChangeButton = () => {
    if (type === 'email') {
      const emailRegExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!emailRegExp.test(state)) {
        setStateMsg(
          '가입한 적 없거나 올바르지 않은 이메일 주소를 입력하신 경우 메일을 받으실 수 없습니다.'
        );
      } else {
        setStateMsg(`${state}으로 아이디를 전송했습니다.`);
      }
    } else if (type === 'email_verify') {
      const emailRegExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!emailRegExp.test(state)) {
        setStateMsg(
          '가입한 적 없거나 올바르지 않은 이메일 주소를 입력하신 경우 메일을 받으실 수 없습니다.'
        );
      } else {
        setStateMsg(`${state}으로 인증번호를 전송했습니다.`);
      }
    } else if (type === 'verify') {
      //구현해야함
      setStateMsg('인증번호가 올바르지 않습니다. 다시 입력해주세요');
    } else {
    }
  };

  return (
    <>
      <div className={['IInputTextForm', `${btnState}`].join('')}>
        <div className={`${btnState}`}>
          <div className="IInputText"> {text} </div>
          <div className="IInputForm">
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type={type}
            />
          </div>
        </div>
        <div className={['IButton', `${btnState}`].join('')}>
          <button onClick={onChangeButton}>{btnText}</button>
        </div>
      </div>
    </>
  );
};

export default Input;
