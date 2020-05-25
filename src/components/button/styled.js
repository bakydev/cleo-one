import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ bg }) => (bg ? bg : '#1070CA')};
  color: ${({ color }) => (color ? color : '#fff')};
  flex: ${({ flex }) => (flex ? flex : 'auto')};
  border-radius: 0;
  padding: 10px 15px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border: 2px solid #1070ca;
`;
