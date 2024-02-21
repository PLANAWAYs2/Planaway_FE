import React from "react";
import {
  PlusMinusBtn,
  PEInputForm,
  PESearchForm,
  PECity,
  BtnWrapper,
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
  return (
    <PECity>
      {inputItems.map((item, index) => {
        return (
          <PESearchForm>
            <FontAwesomeIcon icon={faMagnifyingGlass} />

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
          </PESearchForm>
        );
      })}
      <BtnWrapper>
        <PlusMinusBtn onClick={() => AddInput()}> + </PlusMinusBtn>
      </BtnWrapper>
    </PECity>
  );
};

export default PEInput;
