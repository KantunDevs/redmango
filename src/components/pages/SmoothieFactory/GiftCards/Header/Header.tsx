'use client';

import Image from 'next/image';

import { Wrapper, Content, Title, Text, ImageContainer, StyledMaxWidthWrapper } from './Header.style';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import { GiftCardsHeaderSlice } from 'prismicio-types';

const Header: FC<{ slice: GiftCardsHeaderSlice }> = ({
  slice: {
    primary: { text, title, button },
  },
}) => (
  <StyledMaxWidthWrapper>
    <Wrapper>
      <Content>
        <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
        <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
        <CtaButton dangerouslySetInnerHTML={{ __html: button as string }}></CtaButton>
      </Content>
      <ImageContainer>
        <Image alt="bg" src="/images/image 51.jpg" fill style={{ objectFit: 'cover' }} />
      </ImageContainer>
    </Wrapper>
  </StyledMaxWidthWrapper>
);

export default Header;
