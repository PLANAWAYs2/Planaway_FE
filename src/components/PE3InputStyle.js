import styled from "styled-components";

export const PECity = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const PE3SearchForm = styled.form`
  display: flex;
  width: 188px;
  align-items: center;
  border-bottom: 1px solid #9a9a9a;
  padding-bottom: 8px;
  margin-bottom: 16px;

  svg {
    width: 14px;
    height: 14px;
    margin-right: 10px;
    color: #9a9a9a;
  }
`;

export const PEInputForm = styled.input`
  border: none;
  width: 100%;

  font-family: "Pretendard-Regular";
  font-size: 16px;
  color: #2c2c2c;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlusMinusBtn = styled.button`
  border: 1px solid #9a9a9a;
  border-radius: 4px;
  background-color: white;

  font-family: "Pretendard-Regular";
  font-size: 16px;
  color: #9a9a9a;
`;

export const PE3Circle = styled.div`
  width: 14px;
  height: 14px;
  margin-right: 4px;
  border-radius: 50%; /* 동그라미 모양으로 만들기 위해 */
  background-color: #d9d9d9; /* 회색으로 설정 */
`;
