import React, { useState } from "react";
import {
  PlusMinusBtn,
  PEInputForm,
  PE3SearchForm,
  PECity,
  BtnWrapper,
  PE3Circle,
} from "./PEInputStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PEInput = ({
  inputItems,
  inputAddId,
  AddInput,
  DeleteInput,
  onChange,
}) => {
  const [circleColor, setCircleColor] = useState("#d9d9d9"); // 동그라미의 색을 저장할 상태

  // 동그라미 클릭 시 색 변경 함수
  const handleClickCircle = () => {
    const newColor = circleColor === "#d9d9d9" ? "#FF6827" : "#d9d9d9"; // 현재 색에 따라 다음 색을 설정
    setCircleColor(newColor); // 상태 업데이트
  };

  return (
    <PECity>
      {inputItems.map((item, index) => {
        return (
          <PE3SearchForm>
            <PE3Circle
              style={{ backgroundColor: circleColor }}
              onClick={handleClickCircle}
            />

            <PEInputForm
              name="one"
              type="text"
              defaultValue={item.one}
              onChange={(e) => onChange(e, item.id)}
            />

            {index > 0 && inputItems[index - 1] ? (
              <PlusMinusBtn onClick={() => DeleteInput(item.id)}>
                -
              </PlusMinusBtn>
            ) : (
              ""
            )}
          </PE3SearchForm>
        );
      })}
      <BtnWrapper>
        <PlusMinusBtn onClick={() => AddInput()}> + </PlusMinusBtn>
      </BtnWrapper>
    </PECity>
  );
};

export default PEInput;
