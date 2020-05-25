import styled, { keyframes } from 'styled-components';

const animateDualRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const DualRing = styled.div`
  display: inline-block;
  width: 45px;
  height: 45px;
  margin: 0 auto;

  &:after {
    content: ' ';
    display: block;
    width: 16px;
    height: 16px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid;
    border-color: #9ce8fd transparent #9ce8fd transparent;
    animation: ${animateDualRing} 1.2s linear infinite;
  }
`;
