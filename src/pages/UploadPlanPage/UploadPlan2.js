import Header from '../../components/Header.js';
import PlanSideBar from '../../components/PlanSideBar.js';
import { Container } from '../../Layout.js';
import { UPWrapper } from './PlanEditor2Style.js';
import PlanEditor from './PlanEditor2.js';

const UploadPlan2 = () => {
  return (
    <>
      <Header />
      <Container>
        <UPWrapper>
          <PlanSideBar />
          <PlanEditor />
        </UPWrapper>
      </Container>
    </>
  );
};

export default UploadPlan2;
