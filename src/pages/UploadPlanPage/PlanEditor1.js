import { useRef, useState } from "react";
import { PE3Wrapper, PE3Input } from "./PlanEditor1Style";
import PE1NationContainer from "./PE1NationContainer";
import PE1Day from "./PE1Day";

const PlanEditor1 = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState("");

  return (
    <PE3Wrapper>
      <PE3Input
        placeholder="제목을 입력하세요."
        value={title}
        ref={titleRef}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <hr />
      <PE1NationContainer />
      <PE1Day />
    </PE3Wrapper>
  );
};

export default PlanEditor1;
