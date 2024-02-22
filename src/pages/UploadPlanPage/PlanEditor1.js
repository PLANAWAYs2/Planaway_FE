import { useRef, useState, useEffect } from "react";
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
  PE1ContentShortTitle,
  PE1ContentBox,
  PlusMinusBtn,
  BtnWrapper,
} from "./PlanEditor1Style";
import PE3InputContainer from "../../components/PE3InputContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

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

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
    setSelectedCountry("");
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handlePlusBtnClick = () => {
    setSelectedContinent("");
    setSelectedCountry("");
  };

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
      <PE1ContentBox>
        <PEContentTitle>
          <FontAwesomeIcon icon={faLocationArrow} size="lg" />
          {selectedCountry ? (
            <h4 style={{ color: "#2C2C2C" }}>
              {selectedContinent}, {selectedCountry}
            </h4>
          ) : (
            <h4>여행할 국가를 입력하세요.</h4>
          )}
        </PEContentTitle>
        {showPlusBtn && ( // showPlusBtn이 true일 때만 플러스 버튼을 표시합니다.
          <BtnWrapper>
            <PlusMinusBtn onClick={handlePlusBtnClick}>+</PlusMinusBtn>
          </BtnWrapper>
        )}
        {!selectedContinent || !selectedCountry ? ( // 대륙이나 나라 중 하나라도 선택되지 않았을 때만 드롭다운을 표시합니다.
          <>
            <PE1ContentShortTitle>
              <select
                value={selectedContinent}
                onChange={(e) => handleContinentChange(e.target.value)}
              >
                <option value="">대륙을 선택하세요.</option>
                <option value="Asia">아시아</option>
                <option value="Europe">유럽</option>
                <option value="North America">북아메리카</option>
                <option value="South America">남아메리카</option>
                <option value="Africa">아프리카</option>
                <option value="Oceania">오세아니아</option>
              </select>
            </PE1ContentShortTitle>
            <PE1ContentShortTitle>
              <select
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                <option value="">나라를 선택하세요.</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </PE1ContentShortTitle>
          </>
        ) : null}
      </PE1ContentBox>

      <PEContentTitle>
        <FontAwesomeIcon icon={faCalendar} size="lg" />
        <h4>여행할 기간을 입력하세요.</h4>
      </PEContentTitle>
    </PEWrapper>
  );
};

export default PlanEditor1;
