import { useState, useEffect } from "react";
import PE1NationContainer from "./PE1NationContainer";
import PE1Day from "./PE1Day";

const PlanEditor1 = ({
  selectedCountry,
  selectedContinent,
  numDays,
  setNumDays,
}) => {
  const [countries, setCountries] = useState([]);
  const [showPlusBtn, setShowPlusBtn] = useState(false); // 대륙과 나라가 선택되었을 때만 true가 됩니다.

  console.log("inputItems in OpenDetailPlan:", selectedCountry);

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
    <>
      <PE1NationContainer />
      <PE1Day numDays={numDays} setNumDays={setNumDays} />
    </>
  );
};

export default PlanEditor1;
