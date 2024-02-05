'use client';

import { Wrapper, Text, ContentWrapper, BgWrapper, Card, Hashtag, ImageWrapper } from './GetBirthdayGift.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import { MaxWidthWrapper } from '@styles/common';
import Image from 'next/image';
import { GetBirthdayGiftSlice } from 'prismicio-types';

const GetBirthdayGift: FC<{ slice: GetBirthdayGiftSlice }> = ({
  slice: {
    primary: { hashtag, text, button },
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
            <Image alt="raspberries" fill src="/images/image 69.jpg" style={{ objectFit: 'cover' }} />
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
