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
        to="/9-1"
        isActive={(match, location) => location.pathname === "/9-1"}
      >
        여행 정보
      </SBLink>
      <SBLink
        to="/9-2"
        isActive={(match, location) => location.pathname === "/9-2"}
      >
        여행 상세정보
      </SBLink>
      <SBLink
        to="/9-3"
        isActive={(match, location) => location.pathname === "/9-3"}
      >
        여행 준비물 리스트
      </SBLink>
      <SBLink
        to="/9-4"
        isActive={(match, location) => location.pathname === "/9-4"}
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