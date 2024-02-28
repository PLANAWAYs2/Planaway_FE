import { useRef, useState } from "react";
import {
  PE3Wrapper,
  PE3Input,
  PEContents,
  PE3ContentTitle,
  PEMapWrapper,
  PE3ContentBox,
  PE3ContentBoxLine,
  PE3Container,
} from "./PlanEditor34Style";
import PE3InputContainer from "./PE3InputContainer";

const PlanEditor4 = () => {
  const titleRef = useRef();
  const [title, setTitle] = useState();

  return (
    <PE3Wrapper>
      <PE3Input
        placeholder="제목을 입력하세요."
        value={title}
        ref={titleRef}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <hr />
      <PE3Container>
        <PE3ContentBoxLine>
          <PE3ContentBox>
            <PE3ContentTitle>
              <h4>프랑스</h4>
            </PE3ContentTitle>

            <PEContents>
              <PEMapWrapper>
                <PE3InputContainer />
              </PEMapWrapper>
            </PEContents>
          </PE3ContentBox>
        </PE3ContentBoxLine>

        <PE3ContentBoxLine>
          <PE3ContentBox>
            <PE3ContentTitle>
              <h4>이탈리아</h4>
            </PE3ContentTitle>

            <PEContents>
              <PEMapWrapper>
                <PE3InputContainer />
              </PEMapWrapper>
            </PEContents>
          </PE3ContentBox>
        </PE3ContentBoxLine>

        <PE3ContentBoxLine>
          <PE3ContentBox>
            <PE3ContentTitle>
              <h4>독일</h4>
            </PE3ContentTitle>

            <PEContents>
              <PEMapWrapper>
                <PE3InputContainer />
              </PEMapWrapper>
            </PEContents>
          </PE3ContentBox>
        </PE3ContentBoxLine>

        <PE3ContentBoxLine>
          <PE3ContentBox>
            <PE3ContentTitle>
              <h4>면세점</h4>
            </PE3ContentTitle>

            <PEContents>
              <PEMapWrapper>
                <PE3InputContainer />
              </PEMapWrapper>
            </PEContents>
          </PE3ContentBox>
        </PE3ContentBoxLine>
      </PE3Container>
    </PE3Wrapper>
  );
};

export default PlanEditor4;
