'use client';

import { Wrapper, Content, SideImage, Title, Text, HeaderMaxWidthWrapper } from './Header.style';

import type { FC } from 'react';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const Header: FC = () => (
  <HeaderMaxWidthWrapper>
    <Wrapper>
      <Content>
        <Title>Have you ever tasted a red mango?</Title>
        <Text>
          You don’t see red mangoes often in stores – but once you’ve tasted one, you’ll never settle for anything less.
          Mangoes only turn red when they reach the peak of ripeness. That’s when they are the most delicious, and
          nutritious. Our name, Red Mango, is a symbol of our commitment to using only the best all-natural ingredients
          for our frozen yogurt, smoothies and parfaits.
        </Text>
      </Content>
      <SideImage>
        <Image
          alt="about us side image"
          src="/images/image 51 (4).jpg"
          style={{
            objectFit: 'cover',
          }}
          fill
        />
      </SideImage>
      <FloatingImage
        alt="logo"
        style={{ position: 'absolute', left: '50%', bottom: '0', transform: 'translateX(-50%) translateY(50%)' }}
        width="clamp(100px,11.77vw, 178px)"
        height="clamp(98px,11.57vw, 175px)"
        src="/images/Group 116.svg"
      />
    </Wrapper>
  </HeaderMaxWidthWrapper>
);

export default Header;
