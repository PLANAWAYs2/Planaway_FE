import { useRef, useState } from 'react';
import { Container } from '../../Layout';
import Header from '../../components/Header';
import Dropdown from './Dropdown';
import './ViewPlan.css';

const ViewPlan = () => {
  const [DropdownView, setDropdownView] = useState(false);
  const [initState, setInitState] = useState('최신순');

  const handleClickDropdown = () => {
    setDropdownView(!DropdownView);
  };

  const onChangeState = (value) => {
    setInitState(value);
    setDropdownView(false);
  };

  return (
    <>
      <Header />
      <Container>
        <div className="VPpage">
          <div className="VPTextSort">
            <div className="VPSortingText">
              <span>10</span>개의 여행일기가 있습니다.
            </div>
            <div className="VPDropdown">
              <button onClick={handleClickDropdown} className="DDropdownBtn">
                {DropdownView ? (
                  <img src={process.env.PUBLIC_URL + '/assets/ArrowUp.png'} />
                ) : (
                  <img src={process.env.PUBLIC_URL + '/assets/ArrowDown.png'} />
                )}
                <span>{initState}</span>
              </button>
              <Dropdown visiblity={DropdownView}>
                <ul>
                  <li onClick={() => onChangeState('최신순')}>최신순</li>
                  <li onClick={() => onChangeState('인기순')}>인기순</li>
                  <li onClick={() => onChangeState('오래된순')}>오래된순</li>
                </ul>
              </Dropdown>
            </div>
          </div>
          <div className="VPCard">
            <div className="VPCard_1"></div>
            <div className="VPCard_2"></div>
            <div className="VPCard_3"></div>
            <div className="VPCard_4"></div>
            <div className="VPCard_5"></div>
            <div className="VPCard_6"></div>
            <div className="VPCard_7"></div>
            <div className="VPCard_8"></div>
            <div className="VPCard_9"></div>
            <div className="VPCard_10"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ViewPlan;
