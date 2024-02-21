import { useRef, useState } from "react";
import {
  PEWrapper,
  PEInput,
  PEContents,
  PEContentTitle,
  PEMap,
  PEMapWrapper,
} from "./PlanEditor3Style";
import PEInputContainer from "../../components/PEInputContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const PlanEditor3 = () => {
  const API_KEY = "AIzaSyDedTPh8y0kQKaWqEGKnPwXAMXhLeENOHU";

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

      <PEContents>
        <PEContentTitle>
          <FontAwesomeIcon icon={faLocationArrow} size="lg" />
          <h4>첫 번째 여행지, 프랑스</h4>
        </PEContentTitle>

        <PEMapWrapper>
          <PEMap>
            <iframe
              width="616px"
              height="378px"
              frameborder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=프랑스&zoom=6`}
            />
          </PEMap>

          <PEInputContainer />
        </PEMapWrapper>
      </PEContents>
    </PEWrapper>
  );
};

export default PlanEditor3;
