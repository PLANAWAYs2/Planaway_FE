import React, { useState } from "react";
import PE1Nation from "./PE1Nation";

const PE1NationContainer = () => {
  const [inputItems, setInputItems] = useState([
    {
      id: 0,
      item: {
        continent: "",
        country: "",
      },
    },
  ]);

  const handleInputChange = (id, field, value) => {
    setInputItems((prevInputItems) =>
      prevInputItems.map((item) =>
        item.id === id
          ? { ...item, item: { ...item.item, [field]: value } }
          : item
      )
    );
  };

  const handleAddInput = () => {
    setInputItems((prevInputItems) => [
      ...prevInputItems,
      {
        id: prevInputItems.length,
        item: {
          continent: "",
          country: "",
        },
      },
    ]);
  };

  const handleDeleteInput = (id) => {
    setInputItems((prevInputItems) =>
      prevInputItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <PE1Nation
        inputItems={inputItems}
        onInputChange={handleInputChange}
        onAddInput={handleAddInput}
        onDeleteInput={handleDeleteInput}
      />
    </div>
  );
};

export default PE1NationContainer;
