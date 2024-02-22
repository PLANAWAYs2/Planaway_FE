import styled from "styled-components";

export const UPWrapper = styled.div`
  display: flex;
`;
export const PEWrapper = styled.div`
  margin: 73px 0 0 40px;

  display: flex;
  flex-direction: column;
  width: 100%;
  hr {
    width: 100%;
    margin: 26px 0 57px;
    border: #efefef 1px solid;
  }
`;

export const PEInput = styled.input`
  border: none;
  font-family: "Pretendard-Regular";
  color: #2c2c2c;
  font-size: 36px;
  font-weight: 600;
`;

export const PEContents = styled.div``;

export const PEContentTitle = styled.div`
  width: 404px;
  display: flex;
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

export const PEMap = styled.div`
  margin: 0 24px 52px 0;
`;

export const PEMapWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
