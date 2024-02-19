import { Container } from "../../Layout";
import Header from "../../components/Header";
import MyPageSideBar from "../../components/MyPageSideBar";
import PlanSideBar from "../../components/PlanSideBar";
import Profile from "../../components/Profile";
import "./PlanSets.css";

const PlanSets = () => {
  return (
    <>
      <Header />
      <Container>
        <div style={{ display: "flex" /*justifyContent: "space-between"*/ }}>
          <div className="MPframe">
            <MyPageSideBar />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Profile />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PlanSets;
