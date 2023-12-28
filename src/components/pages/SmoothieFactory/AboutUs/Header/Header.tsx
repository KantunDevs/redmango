'use client';
import Lottie from 'lottie-react';

import {
  FloatingShapeImage,
  Wrapper,
  Content,
  SideImage,
  Title,
  Text,
  RelativeWrapper,
  HeaderMaxWidthWrapper,
  LottieWrapper,
} from './Header.style';

import type { FC } from 'react';
import Image from 'next/image';

import oneAtATime from '../../../../../../public/lottie/oneAtATime.json';

const Header: FC = () => (
  <RelativeWrapper>
    <FloatingShapeImage
      alt="about us bg"
      height="clamp(392px, 46.09vw, 697px)"
      left="0%"
      src="/images/cyan-shape.svg"
      top="0%"
      width="clamp(381px,44.84vw, 678px)"
    />
    <HeaderMaxWidthWrapper>
      <Wrapper>
        <Content>
          <Title>
            Building a <br /> better you
          </Title>
          <Text>
            Today, Smoothie Factory is for both athletes and those who want to pursue a more active lifestyle, and are
            looking for a snack or light meal to provide energy and nutrition of fruits and vegetables without added
            preservatives or sugar.
          </Text>
        </Content>
        <SideImage>
          <Image
            alt="about us side image"
            src="/images/side-img-1.jpg"
            style={{
              objectFit: 'cover',
            }}
            fill
          />
        </SideImage>
      </Wrapper>
    </HeaderMaxWidthWrapper>
    <LottieWrapper>
      <Lottie animationData={oneAtATime} />
    </LottieWrapper>
  </RelativeWrapper>
);

export default Header;
