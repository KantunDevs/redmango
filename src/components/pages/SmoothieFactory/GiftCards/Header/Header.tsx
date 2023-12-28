'use client';

import Image from 'next/image';

import { Wrapper, Content, Title, Text, ImageContainer, StyledMaxWidthWrapper } from './Header.style';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';

const Header: FC = () => (
  <StyledMaxWidthWrapper>
    <Wrapper>
      <Content>
        <Title>THE GIFT THAT KEEPS ON GIVING</Title>
        <Text>
          Treat your loved ones to a delicious and healthy dessert with Red Mango's gift cards! With a variety of
          flavors and toppings, there's something for everyone. Plus, our frozen yogurt is packed with probiotics and
          nutrients. Buy a gift card today and give the gift of a tasty and nutritious treat!
        </Text>
        <CtaButton>Get a gift card</CtaButton>
      </Content>
      <ImageContainer>
        <Image alt="bg" src="/images/image 51.jpg" fill style={{ objectFit: 'cover' }} />
      </ImageContainer>
    </Wrapper>
  </StyledMaxWidthWrapper>
);

export default Header;
