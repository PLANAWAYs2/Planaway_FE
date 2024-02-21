import { useRef, useState } from "react";
import {
  PE3Wrapper,
  PE3Input,
  PEContents,
  PE3ContentTitle,
  PEMap,
  PEMapWrapper,
  PE3ContentBox,
  PE3ContentBoxLine,
  PE3Container,
} from "./PlanEditor3Style";
import PE3InputContainer from "../../components/PE3InputContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const PlanEditor1 = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState();

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
      <PE3Container></PE3Container>
    </PE3Wrapper>
  );
};

export default PlanEditor1;
