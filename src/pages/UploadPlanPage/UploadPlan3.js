import Header from "../../components/Header.js";
import PlanSideBar from "../../components/PlanSideBar.js";
import { Container } from "../../Layout";
import { UPWrapper } from "./PlanEditor34Style.js";
import PlanEditor3 from "./PlanEditor3.js";

const UploadPlan3 = () => {
  return (
    <>
      <Header />
      <Container>
        <UPWrapper>
          <PlanSideBar />
          <PlanEditor3 />
        </UPWrapper>
      </Container>
    </>
  );
};

export default UploadPlan3;
