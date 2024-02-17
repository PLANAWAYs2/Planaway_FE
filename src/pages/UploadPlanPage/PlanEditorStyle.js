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

export const PTInput = styled.input`
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

  svg {
    margin: 0 18px 10px 0;
  }

  h4 {
    font-weight: 400;
    color: #2c2c2c;
    margin: 0 0 7px 0;
  }
`;
