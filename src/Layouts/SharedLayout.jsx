import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Header, HeaderNavLink, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/movies">Movies</HeaderNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
