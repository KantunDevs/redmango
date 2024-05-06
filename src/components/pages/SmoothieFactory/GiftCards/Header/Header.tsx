'use client';

import { Wrapper, Content, Title, Text, ImageContainer, StyledMaxWidthWrapper } from './Header.style';
import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';
import type { FC } from 'react';
import { GiftCardsHeaderSlice } from 'prismicio-types';
import { PrismicImage } from '@prismicio/react';

const Header: FC<{ slice: GiftCardsHeaderSlice }> = ({
  slice: {
    primary: { text, title, button, image },
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
        <PrismicImage
          field={image}
          style={{
            objectFit: 'cover',
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: '0px',
          }}
        />
      </ImageContainer>
    </Wrapper>
  </StyledMaxWidthWrapper>
);

export default Header;
