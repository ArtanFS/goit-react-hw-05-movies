import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px;
  padding-top: 0;
  border-bottom: 2px solid #e7e9fc;
`;

export const ImgWrap = styled.div`
  display: flex;
  /* padding: 15px; */
`;

export const InfoWrap = styled.div`
  padding: 15px;
`;

export const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 12px;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const InfoList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoItem = styled.li`
  /* font-size: 16px; */
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #0f51b5;
    text-decoration: underline;
  }
`;
