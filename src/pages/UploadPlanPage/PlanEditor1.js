import { useRef, useState, useEffect } from "react";
import { PEWrapper, PEInput } from "./PlanEditor1Style";
import PE1Nation from "../../components/PE1Nation";
import PE1Day from "../../components/PE1Day";

const PlanEditor1 = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [showPlusBtn, setShowPlusBtn] = useState(false); // 대륙과 나라가 선택되었을 때만 true가 됩니다.

  useEffect(() => {
    if (selectedContinent && selectedCountry) {
      setShowPlusBtn(true); // 대륙과 나라가 선택되었을 때 플러스 버튼을 표시합니다.
    } else {
      setShowPlusBtn(false); // 그 외의 경우에는 플러스 버튼을 숨깁니다.
    }
  }, [selectedContinent, selectedCountry]);

  useEffect(() => {
    if (selectedContinent) {
      fetch(`https://restcountries.com/v3.1/region/${selectedContinent}`)
        .then((response) => response.json())
        .then((data) => {
          const countryNames = data.map((country) => country.name.common);
          setCountries(countryNames);
        })
        .catch((error) => console.error("Error fetching countries:", error));
    }
  }, [selectedContinent]);

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
      <PE1Nation />
      <PE1Day />
    </PEWrapper>
  );
};

export default PlanEditor1;
