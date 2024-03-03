import PE1NationContainer from "./PE1NationContainer";
import PE1Day from "./PE1Day";

const PlanEditor1 = ({ numDays, setNumDays }) => {
  return (
    <>
      <PE1NationContainer />
      <PE1Day numDays={numDays} setNumDays={setNumDays} />
    </>
  );
};

export default PlanEditor1;
