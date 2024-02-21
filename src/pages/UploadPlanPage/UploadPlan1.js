import Header from "../../components/Header.js";
import PlanSideBar from "../../components/PlanSideBar.js";
import { Container } from "../../Layout";
import { UPWrapper } from "./PlanEditor3Style.js";
import PlanEditor1 from "./PlanEditor1.js";

const UploadPlan1 = () => {
  return (
    <>
      <Header />
      <Container>
        <UPWrapper>
          <PlanSideBar />
          <PlanEditor1 />
        </UPWrapper>
      </Container>
    </>
  );
};

export default UploadPlan1;
