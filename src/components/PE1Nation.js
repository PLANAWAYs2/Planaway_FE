import { useRef, useState, useEffect } from "react";

import {
  PE1ContentTitle,
  PE1ContentShortTitle,
  PE1ContentBox,
  PlusMinusBtn,
  BtnWrapper,
} from "./PE1NationStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const PE1Nation = ({
  inputItems,
  inputAddId,
  AddInput,
  DeleteInput,
  onChange,
}) => {
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

  return (
    <div>
      {inputItems.map((item, index) => (
        <PE1ContentBox>
          <PE1ContentTitle
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon icon={faLocationArrow} size="lg" />
              {selectedCountry ? (
                <h4 style={{ color: "#2C2C2C" }}>
                  {selectedContinent}, {selectedCountry}
                </h4>
              ) : (
                <h4>여행할 국가를 입력하세요.</h4>
              )}
            </div>
            {index > 0 && inputItems[index - 1] && (
              <PlusMinusBtn onClick={() => DeleteInput(item.id)}>
                -
              </PlusMinusBtn>
            )}
          </PE1ContentTitle>

          {!selectedContinent || !selectedCountry ? (
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
          {index === inputItems.length - 1 && showPlusBtn && (
            <BtnWrapper>
              <PlusMinusBtn onClick={() => AddInput()}>+</PlusMinusBtn>
            </BtnWrapper>
          )}
        </PE1ContentBox>
      ))}
    </div>
  );
};

export default PE1Nation;
