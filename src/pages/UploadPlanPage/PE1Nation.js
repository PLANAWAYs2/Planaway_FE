import React, { useState, useEffect } from "react";
import {
  PE1ContentTitle,
  PE1ContentShortTitle,
  PE1ContentBox,
  PE1PlusMinusBtn,
  PE1BtnWrapper,
} from "./PE1NationStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const PE1Nation = ({ inputItems, AddInput, DeleteInput, onChange }) => {
  const [countries, setCountries] = useState([]);
  const [showPlusBtn, setShowPlusBtn] = useState(false); // 대륙과 나라가 선택되었을 때만 true가 됩니다.

  useEffect(() => {
    if (inputItems.some((item) => !item.item.continent || !item.item.country)) {
      setShowPlusBtn(false);
    } else {
      setShowPlusBtn(true);
    }
  }, [inputItems]);

  useEffect(() => {
    const fetchCountries = async (continent) => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${continent}`
        );
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    inputItems.forEach((item) => {
      if (
        item.item.continent &&
        !countries.some((country) => country === item.item.continent)
      ) {
        fetchCountries(item.item.continent);
      }
    });
  }, [inputItems]);

  const handleContinentChange = (e, id) => {
    const { value } = e.target;
    onChange(e, id, "continent");
  };

  const handleCountryChange = (e, id) => {
    const { value } = e.target;
    onChange(e, id, "country");
  };

  return (
    <div>
      {inputItems.map((item, index) => (
        <PE1ContentBox key={index}>
          <PE1ContentTitle
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon icon={faLocationArrow} size="lg" />
              {item.item.country ? (
                <h4 style={{ color: "#2C2C2C" }}>
                  {item.item.continent}, {item.item.country}
                </h4>
              ) : (
                <h4>여행할 국가를 입력하세요.</h4>
              )}
            </div>
            {index > 0 && inputItems[index - 1] && (
              <PE1PlusMinusBtn onClick={() => DeleteInput(item.id)}>
                -
              </PE1PlusMinusBtn>
            )}
          </PE1ContentTitle>

          {!item.item.continent || !item.item.country ? (
            <>
              <PE1ContentShortTitle>
                <select
                  value={item.item.continent}
                  onChange={(e) => handleContinentChange(e, item.id)}
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
                  value={item.item.country}
                  onChange={(e) => handleCountryChange(e, item.id)}
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
            <PE1BtnWrapper>
              <PE1PlusMinusBtn onClick={AddInput}>+</PE1PlusMinusBtn>
            </PE1BtnWrapper>
          )}
        </PE1ContentBox>
      ))}
    </div>
  );
};

export default PE1Nation;
