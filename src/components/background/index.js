import React from 'react';
import { Wrapper, Image, Center } from './styled';
import bgImg from '../../assets/img/bg-img.jpg';

const Background = ({ children }) => (
  <Wrapper>
    <Image src={bgImg} alt="bg img" />
    <Center>{children}</Center>
  </Wrapper>
);

export default Background;
