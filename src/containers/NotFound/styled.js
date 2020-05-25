import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ErrorTitle = styled.div`
  font-size: 48px;
  color: #010101;

  @media (min-width: 768px) {
    font-size: 100px;
  }
`;

export const ErrorSubTitle = styled.p`
  font-size: 20px;
  color: #010101;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const ReturnLink = styled(Link)`
  margin: 20px 0 0;
`;
