import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  margin: ${({ margin }) => (margin ? margin : '0 auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  display: ${({ display }) => (display ? display : 'block')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'inherit')};
  ${({ overlay }) =>
    overlay &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
      }
    `}
`;
