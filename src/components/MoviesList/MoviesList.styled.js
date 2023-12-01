import styled from 'styled-components';

export const MoviesListWrap = styled.div`
  padding: 15px;
`;

export const MoviesItems = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
`;

export const MoviesItem = styled.li`
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #0f51b5;
    text-decoration: underline;
  }
`;
