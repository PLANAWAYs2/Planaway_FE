import React, { useState } from "react";
import PE1Nation from "./PE1Nation";

const PE1NationContainer = () => {
  const [inputItems, setInputItems] = useState([
    {
      id: 0,
      item: {
        continent: "", // 초기 대륙 값
        country: "", // 초기 나라 값
      },
    },
  ]);
  const [inputAddId, setInputAddId] = useState(1);

  const AddInput = () => {
    const newInputItem = {
      id: inputAddId,
      item: {
        continent: "", // 새로운 드롭다운의 초기 대륙 값
        country: "", // 새로운 드롭다운의 초기 나라 값
      },
    };
    setInputItems([...inputItems, newInputItem]);
    setInputAddId(inputAddId + 1);
  };

  const DeleteInput = (id) => {
    setInputItems(inputItems.filter((item) => item.id !== id));
  };

  const onChange = (e, id, field) => {
    const { value } = e.target;
    setInputItems(
      inputItems.map((item) =>
        item.id === id
          ? { ...item, item: { ...item.item, [field]: value } }
          : item
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
