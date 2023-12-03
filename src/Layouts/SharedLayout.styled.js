import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px;
  border-bottom: 1px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  &:hover {
    color: #3f51b5;
  }
  &.active {
    position: relative;
    color: #3f51b5;
  }
  &.active::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #3f51b5;
  }
`;
