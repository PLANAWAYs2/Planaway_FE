import { React, useRef, useState } from 'react';
import {
  Nav,
  MenuWrapper,
  NavLink,
  NavMenu,
  SearchForm,
  Input,
  NavBtn,
  Button,
} from './HeaderStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    const searchTerm = searchRef.current.value;

    if (searchTerm.length < 1) {
      searchRef.current.focus();
      return;
    }
  };

  const handleUserClick = () => {
    if (isLoggedIn) {
      navigate('/userinfo');
    } else {
      navigate('/login');
    }
  };

  return (
    <Nav>
      <NavMenu>
        <NavLink to="/" activestyle="true">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
            alt="Logo"
          />
        </NavLink>

        <NavBtn>
          {isLoggedIn ? (
            <Button onClick={handleUserClick}>사용자 이름</Button>
          ) : (
            <Button onClick={handleUserClick}>로그인/회원가입</Button>
          )}
        </NavBtn>
      </NavMenu>

      <NavMenu>
        <MenuWrapper>
          <NavLink to="/plandetail" activestyle="true">
            여행 계획 시작하기
          </NavLink>
          <NavLink to="/planlist" activestyle="true">
            기존 계획 조회하기
          </NavLink>
          <NavLink to="/viewplan" activestyle="true">
            여행지 둘러보기
          </NavLink>
        </MenuWrapper>

        <SearchForm onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />{' '}
          <Input
            placeholder="가고 싶은 국가나 도시를 검색하세요."
            value={searchTerm}
            ref={searchRef}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
          />
        </SearchForm>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
