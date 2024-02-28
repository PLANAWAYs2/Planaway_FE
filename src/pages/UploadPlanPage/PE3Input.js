import React, { useState } from "react";
import {
  PlusMinusBtn,
  PEInputForm,
  PE3SearchForm,
  PECity,
  BtnWrapper,
  PE3Circle,
} from "./PE3InputStyle";

const PE3Input = ({
  inputItems,
  inputAddId,
  AddInput,
  DeleteInput,
  onChange,
}) => {
  const [circleColors, setCircleColors] = useState(
    Array(inputItems.length).fill("#d9d9d9")
  );

  const handleClickCircle = (index) => {
    const newCircleColors = [...circleColors];
    newCircleColors[index] =
      newCircleColors[index] === "#d9d9d9" ? "#FF6827" : "#d9d9d9";
    setCircleColors(newCircleColors);
  };

  return (
    <PECity>
      {inputItems.map((item, index) => (
        <PE3SearchForm key={item.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PE3Circle
              style={{ backgroundColor: circleColors[index] }}
              onClick={() => handleClickCircle(index)}
            />
            <PEInputForm
              name="one"
              type="text"
              defaultValue={item.one}
              onChange={(e) => onChange(e, item.id)}
            />
          </div>
          {index > 0 && inputItems[index - 1] && (
            <PlusMinusBtn onClick={() => DeleteInput(item.id)}>-</PlusMinusBtn>
          )}
        </PE3SearchForm>
      ))}
      <BtnWrapper>
        <PlusMinusBtn onClick={() => AddInput()}>+</PlusMinusBtn>
      </BtnWrapper>
    </PECity>
  );
};

export default PE3Input;
