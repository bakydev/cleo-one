import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 0 10px;
  line-height: 16px;
  font-size: 12px;
  height: 42px;
  border-radius: 0;
  color: #425a70;
  outline: none;
  border: 1px solid #e4e7eb;
  border-right: none;
  box-sizing: border-box;
  flex: 2;

  &:focus {
    outline: none;
    border: 1px solid #1070ca;
  }
`;
