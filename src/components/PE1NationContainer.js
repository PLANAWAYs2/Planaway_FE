import React, { useState } from "react";
import PE1Nation from "./PE1Nation";

const PE1NationContainer = () => {
  const [inputItems, setInputItems] = useState([
    {
      id: 0,
      item: "",
    },
  ]);
  const [inputAddId, setInputAddId] = useState(1);

  const AddInput = () => {
    const newInputItem = {
      id: inputAddId,
      item: "",
    };
    setInputItems([...inputItems, newInputItem]);
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
      <PE1Nation
        inputItems={inputItems}
        inputAddId={inputAddId}
        AddInput={AddInput}
        DeleteInput={DeleteInput}
        onChange={onChange}
      />
    </div>
  );
};

export default PE1NationContainer;
