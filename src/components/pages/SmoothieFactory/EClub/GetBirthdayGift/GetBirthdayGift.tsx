'use client';

import { Wrapper, Text, ContentWrapper, BgWrapper, Card, Hashtag, ImageWrapper } from './GetBirthdayGift.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import { MaxWidthWrapper } from '@styles/common';
import Image from 'next/image';

const GetBirthdayGift: FC = () => (
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
          <Hashtag>#besteverbirthdaygift</Hashtag>
        </Card>
        <ContentWrapper>
          <Text>
            Celebrate your birthday in style with Red Mango's E-Club! As a member, you'll receive a special birthday
            gift each year, just for being part of our club. Plus, you'll get access to exclusive deals and promotions
            all year long. Join today and let us help make your birthday extra sweet!
          </Text>
          <CtaButton>Join now</CtaButton>
        </ContentWrapper>
      </Wrapper>
    </MaxWidthWrapper>
  </BgWrapper>
);

export default GetBirthdayGift;
