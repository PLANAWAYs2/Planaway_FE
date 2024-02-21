import React, { useState } from "react";
import PEInput from "./PEInput";

const PEInputContainer = () => {
  const [inputItems, setInputItems] = useState([
    {
      id: 0,
      item: "",
    },
  ]);
  const [inputAddId, setInputAddId] = useState(1);

  const AddInput = () => {
    const input = {
      id: inputAddId,
      item: "",
    };
    setInputItems([...inputItems, input]);
    setInputAddId(inputAddId + 1);
  };

  const DeleteInput = (id) => {
    setInputItems(inputItems.filter((item) => item.id !== id));
  };

  const onChange = (e, id) => {
    const { name, value } = e.target;

    setInputItems(
      inputItems.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  return (
    <div>
      <PEInput
        inputItems={inputItems}
        inputAddId={inputAddId}
        AddInput={AddInput}
        DeleteInput={DeleteInput}
        onChange={onChange}
      />
    </div>
  );
};

export default PEInputContainer;
