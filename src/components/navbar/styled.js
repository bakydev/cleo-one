import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Logo = styled(NavLink)`
  color: #425a70;
  height: 56px;
  display: flex;
  align-items: center;
  margin-right: 30px;
  text-decoration: none;

  img {
    width: auto;
    height: 32px;
  }

  span {
    margin-left: 10px;
  }
`;
