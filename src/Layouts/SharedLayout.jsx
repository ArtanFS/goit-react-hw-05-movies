import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader';
import { Header, HeaderNavLink, Nav } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <HeaderNavLink to="/">Home</HeaderNavLink>
          <HeaderNavLink to="/movies">Movies</HeaderNavLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
