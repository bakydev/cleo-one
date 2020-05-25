import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 56px);
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: calc(100vh - 56px);
  object-position: center;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
