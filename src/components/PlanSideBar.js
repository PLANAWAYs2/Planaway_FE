import {
  SBWrapper,
  SBLink,
  SBTemporarySaveBtn,
  SBSaveBtn,
  SBBtnWrapper,
} from "./SideBarStyle";

const PlanSideBar = () => {
  return (
    <SBWrapper>
      <SBLink
        to="/uploadplan1"
        isActive={(match, location) => location.pathname === "/uploadplan1"}
      >
        여행 정보
      </SBLink>
      <SBLink
        to="/uploadplan2"
        isActive={(match, location) => location.pathname === "/uploadplan2"}
      >
        여행 상세정보
      </SBLink>
      <SBLink
        to="/uploadplan3"
        isActive={(match, location) => location.pathname === "/uploadplan3"}
      >
        여행 준비물 리스트
      </SBLink>
      <SBLink
        to="/uploadplan4"
        isActive={(match, location) => location.pathname === "/uploadplan4"}
      >
        여행 기념품 리스트
      </SBLink>
      <SBBtnWrapper>
        <SBTemporarySaveBtn>임시저장</SBTemporarySaveBtn>
        <SBSaveBtn>저장</SBSaveBtn>
      </SBBtnWrapper>
    </SBWrapper>
  );
};

export default PlanSideBar;
