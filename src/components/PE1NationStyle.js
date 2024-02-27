import styled from "styled-components";

export const PEContentTitle = styled.div`
  width: 404px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  margin-bottom: 21px;

  svg {
    margin: 0 18px 10px 0;
  }

  h4 {
    font-weight: 400;
    color: #9a9a9a;
    margin: 0 0 7px 0;
  }
`;

export const PE1ContentShortTitle = styled.div`
  width: 192px;
  display: flex;
  margin-bottom: 21px;

  h4 {
    font-weight: 400;
    color: #9a9a9a;
    margin: 0 0 7px 0;
  }
  select {
    width: 100%;
  }
`;

export const PE1ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const BtnWrapper = styled.div`
  height: 16px;
`;

export const PlusMinusBtn = styled.button`
  border: 1px solid #ff6827;
  border-radius: 4px;
  background-color: white;

  font-family: "Pretendard-Regular";
  font-size: 16px;
  color: #ff6827;
`;
