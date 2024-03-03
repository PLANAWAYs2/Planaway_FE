import { useRef, useState } from "react";
import { PE3Wrapper, PE3Input } from "./PlanEditor1Style";
import PE1NationContainer from "./PE1NationContainer";
import PE1Day from "./PE1Day";

const PlanEditor1 = ({ numDays, setNumDays }) => {
  const titleRef = useRef();
  const [title, setTitle] = useState("");

  return (
    <>
      <PE1NationContainer />
      <PE1Day numDays={numDays} setNumDays={setNumDays} />
    </>
  );
};

export default PlanEditor1;
