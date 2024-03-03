import { useRef, useState, useEffect } from "react";
import {
  PEWrapper,
  PETitleInput,
  PEContents,
  PEContentTitle,
  PEMap,
  PEMapWrapper,
  OpenDetailBtn,
  PEInputWrapper,
} from "./PlanEditor2Style";
import PE2OpenDetail from "./PE2OpenDetail";
import PE2CityInput from "./PE2CityInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const PlanEditor2 = () => {
  const API_KEY = "AIzaSyDedTPh8y0kQKaWqEGKnPwXAMXhLeENOHU";

  const titleRef = useRef();
  const [title, setTitle] = useState();
  const [detailPlanOpen, setDetailPlanOpen] = useState(false);

  const [inputItems, setInputItems] = useState([
    {
      id: 0,
      city: "",
      days: 0,
    },
  ]);
  const [dayDetails, setDayDetails] = useState([]);

  const [inputAddId, setInputAddId] = useState(1);
  const [totalDays, setTotalDays] = useState(0);

  const toggleDetailPlan = () => {
    setDetailPlanOpen(!detailPlanOpen);
  };

  const toggleDayPlan = (day) => {
    setDayDetails((prevDetails) =>
      prevDetails.map((detail, index) =>
        index === day ? { ...detail, toggle: !detail.toggle } : detail
      )
    );
  };

  const AddInput = () => {
    const input = {
      id: inputAddId,
      city: "",
      days: 0,
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

  const onChangeDetail = (e, day) => {
    const { name, value } = e.target;

    setDayDetails(
      dayDetails.map((detail) =>
        detail.day === day ? { ...detail, [name]: value } : detail
      )
    );
  };

  useEffect(() => {
    const days = inputItems.reduce((acc, curr) => acc + parseInt(curr.days), 0);
    setTotalDays(days);
  }, [inputItems]);

  useEffect(() => {
    setDayDetails(
      Array.from({ length: 10 }, (_, index) => ({
        day: index + 1,
        content: "",
        detail: "",
        toggle: false,
      }))
    );
  }, []); //length: 10으로 기본 만들어놨고 나중에 9-1에서 몇박 몇일 가져올거야

  useEffect(() => {
    if (totalDays >= 10) {
      alert("총 여행일수가 앞에서 설정한 날짜를 초과했습니다. 수정해주세요.");
    }
  }, [totalDays]);

  return (
    <PEWrapper>
      <PETitleInput
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
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=프랑스&zoom=6`} // "프랑스" 앞에서 가져오기
            />
          </PEMap>

          <PEInputWrapper>
            <PE2CityInput
              inputItems={inputItems}
              inputAddId={inputAddId}
              AddInput={AddInput}
              DeleteInput={DeleteInput}
              onChange={onChange}
            />
            <OpenDetailBtn onClick={toggleDetailPlan}>
              {detailPlanOpen ? "상세계획 닫기" : "상세계획 열기"}
            </OpenDetailBtn>
          </PEInputWrapper>
        </PEMapWrapper>

        {detailPlanOpen && (
          <PE2OpenDetail
            inputItems={inputItems}
            dayDetails={dayDetails}
            onChange={onChange}
            onChangeDetail={onChangeDetail}
            toggleDayPlan={toggleDayPlan}
          />
        )}
      </PEContents>
    </PEWrapper>
  );
};

export default PlanEditor2;
