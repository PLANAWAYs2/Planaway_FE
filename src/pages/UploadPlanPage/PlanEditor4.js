import {
  PE3Contents,
  PE3ContentTitle,
  PE3MapWrapper,
  PE3ContentBox,
  PE3ContentBoxLine,
  PE3Container,
} from "./PlanEditor34Style";
import PE3InputContainer from "./PE3InputContainer";

const PlanEditor4 = () => {
  return (
    <PE3Container>
      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>프랑스</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>
      </PE3ContentBoxLine>

      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>이탈리아</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>
      </PE3ContentBoxLine>

      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>독일</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>
      </PE3ContentBoxLine>

      <PE3ContentBoxLine>
        <PE3ContentBox>
          <PE3ContentTitle>
            <h4>면세점</h4>
          </PE3ContentTitle>

          <PE3Contents>
            <PE3MapWrapper>
              <PE3InputContainer />
            </PE3MapWrapper>
          </PE3Contents>
        </PE3ContentBox>
      </PE3ContentBoxLine>
    </PE3Container>
  );
};

export default PlanEditor4;
