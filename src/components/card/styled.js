import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCard = styled(Link)`
  box-shadow: 0 0 1px rgba(67, 90, 111, 0.47),
    0 2px 4px -2px rgba(67, 90, 111, 0.3);
  display: flex;
  margin: 30px 0;
  padding: 30px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

export const LeftSide = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

export const RightSide = styled.div`
  flex: 2;
  padding-left: 30px;

  div {
    margin-bottom: 15px;
  }
`;
