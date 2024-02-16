import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  flex-direction: column;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuWrapper = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #2c2c2c;
  display: flex;
  justify-content: space-between;

  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  width: 192px;
  margin: 0 20px 20px 0;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9a9a9a;
  }

  img {
    width: 192px;
  }
`;

export const SearchForm = styled.form``;

export const Input = styled.input`
  border: none;
  width: 210px;
  height: 30px;
  border-bottom: 1px solid #9a9a9a;
  outline: none;
  font-family: 'Pretendard-Regular';
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  height: 60%;
  border-radius: 5px;
  background-color: white;
  padding: 0.1rem 0.7rem;
  border: #9a9a9a 1px solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: 'Pretendard-Regular';
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9a9a9a;
  }
`;
