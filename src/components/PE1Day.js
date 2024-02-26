import { useRef, useState, useEffect } from "react";

import { PEContentTitle } from "./PE1DayStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const PE1Day = ({
  inputItems,
  inputAddId,
  AddInput,
  DeleteInput,
  onChange,
}) => {
  return (
    <PEContentTitle>
      <FontAwesomeIcon icon={faCalendar} size="lg" />
      <h4>여행할 기간을 입력하세요.</h4>
    </PEContentTitle>
  );
};

export default PE1Day;
