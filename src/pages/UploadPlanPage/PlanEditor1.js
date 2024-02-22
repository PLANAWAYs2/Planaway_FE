import { useRef, useState } from "react";
import {
  PEWrapper,
  PEInput,
  PEContents,
  PEContentTitle,
  PEMap,
  PEMapWrapper,
  PE3ContentBox,
  PE3ContentBoxLine,
  PE3Container,
} from "./PlanEditor1Style";
import PE3InputContainer from "../../components/PE3InputContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const PlanEditor1 = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState();

  return (
    <PEWrapper>
      <PEInput
        placeholder="제목을 입력하세요."
        value={title}
        ref={titleRef}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <hr />
      <PEContentTitle>
        <FontAwesomeIcon icon={faLocationArrow} size="lg" />
        <h4>여행할 국가를 입력하세요.</h4>
      </PEContentTitle>
      <PEContentTitle>
        <FontAwesomeIcon icon={faCalendar} size="lg" />
        <h4>여행할 기간을 입력하세요.</h4>
      </PEContentTitle>
    </PEWrapper>
  );
};

export default PlanEditor1;
