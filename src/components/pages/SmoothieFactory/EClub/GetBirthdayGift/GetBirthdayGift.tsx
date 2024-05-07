'use client';

import { Wrapper, Text, ContentWrapper, BgWrapper, Card, Hashtag, ImageWrapper } from './GetBirthdayGift.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import { MaxWidthWrapper } from '@styles/common';
import { GetBirthdayGiftSlice } from 'prismicio-types';
import { PrismicImage } from '@prismicio/react';

const GetBirthdayGift: FC<{ slice: GetBirthdayGiftSlice }> = ({
  slice: {
    primary: { hashtag, text, button, image },
  },
}) => (
  <BgWrapper>
    <FloatingImage
      alt="icon"
      height="clamp(108px, 14.68vw, 222px)"
      src="/images/get-b-day-icon.svg"
      width="clamp(108px, 14.68vw, 222px)"
      bottom="clamp(-0px, -1.12vw, -17px)"
      right="clamp(-32px, -3.70vw, -56px)"
    />
    <MaxWidthWrapper>
      <Wrapper>
        <Card>
          <ImageWrapper>
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
          </ImageWrapper>
          <Hashtag dangerouslySetInnerHTML={{ __html: hashtag as string }}></Hashtag>
        </Card>
        <ContentWrapper>
          <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
          <CtaButton dangerouslySetInnerHTML={{ __html: button as string }}></CtaButton>
        </ContentWrapper>
      </Wrapper>
    </MaxWidthWrapper>
  </BgWrapper>
);

export default GetBirthdayGift;
