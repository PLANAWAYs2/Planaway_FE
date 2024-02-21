import Header from "../../components/Header.js";
import PlanSideBar from "../../components/PlanSideBar.js";
import { Container } from "../../Layout";
import { UPWrapper } from "./PlanEditor3Style.js";
import PlanEditor4 from "./PlanEditor4.js";

const UploadPlan4 = () => {
  return (
    <>
      <Header />
      <Container>
        <UPWrapper>
          <PlanSideBar />
          <PlanEditor4 />
        </UPWrapper>
      </Container>
    </>
  );
};

export default UploadPlan4;
