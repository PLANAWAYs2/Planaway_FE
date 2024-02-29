import React from 'react';
import {
  ODPWrapper,
  ODPCityUl,
  ODPCityLi,
  ODPDays,
  ODPDaysInput,
  OrangeBullet,
  ODPDetail,
  ODPInputForm,
  ODPDetailDay,
  ODPOpenBtn,
  DetailText,
} from './PlanEditor2Style';

const OpenDetailPlan = ({
  inputItems,
  dayDetails,
  onChange,
  onChangeDetail,
  toggleDayPlan,
}) => {
  const generateInputForms = () => {
    return dayDetails.map((detail, index) => (
      <React.Fragment key={index}>
        <ODPDetailDay>
          {detail.day}일차
          <ODPInputForm
            type="text"
            name="content"
            defaultValue={detail.content}
            onChange={(e) => onChangeDetail(e, detail.day)}
          />
          <ODPOpenBtn onClick={() => toggleDayPlan(index)}>
            {detail.toggle ? '닫기' : '열기'}
          </ODPOpenBtn>
        </ODPDetailDay>

        {detail.toggle && (
          <DetailText
            name="detail"
            defaultValue={detail.detail}
            onChange={(e) => onChangeDetail(e, detail.day)}
          />
        )}
      </React.Fragment>
    ));
  };

  return (
    <ODPWrapper>
      <ODPCityUl>
        {inputItems.map((item) => (
          <ODPCityLi key={item.id}>
            <OrangeBullet /> {item.city}
            <ODPDays>
              <ODPDaysInput
                type="text"
                name="days"
                defaultValue={item.days}
                onChange={(e) => onChange(e, item.id)}
              />
              일
            </ODPDays>
          </ODPCityLi>
        ))}
      </ODPCityUl>
      <ODPDetail>{generateInputForms()}</ODPDetail>
    </ODPWrapper>
  );
};

export default OpenDetailPlan;
