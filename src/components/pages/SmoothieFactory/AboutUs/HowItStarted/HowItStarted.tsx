'use client';

import Image from 'next/image';
import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';

import { ContentWrapper, Text, Title, OurMission, OurMissionText, OurMissionTitle } from './HowItStarted.style';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const HowItStarted: FC = () => {
  return (
    <>
      <ContentWrapper>
        <MaxWidthWrapper style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <Image alt="bg" src="/images/about-us-bg.jpg" style={{ objectFit: 'cover', zIndex: -1 }} fill />
          <Title>How it started</Title>
          <Text style={{ marginBottom: 'clamp(26px,1.85vw, 28px)' }}>
            When we opened our first Red Mango in 2007, we set out to provide an indulgent treat that is also wholesome
            and better for you. For those people who aspire to a more balanced lifestyle, and see wellness holistically,
            Red Mango is the treat for your whole self. Today, there are over 200 locations domestically, in Mexico and
            in Central America, and yes, every spoonful is still as good as the first.
          </Text>
          <Text>
            Every single one of our locations are locally owned. We support the local communities in which we are
            located and provide more than just yummy and better-for-you treats! Enough talk, come visit one of our
            locations and experience Red Mango for yourself.
          </Text>
        </MaxWidthWrapper>
      </ContentWrapper>
      <OurMission>
        <MaxWidthWrapper style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <FloatingImage
            width="clamp(82px,7.47vw, 113px)"
            height="clamp(80px, 7.27vw, 110px)"
            alt="logo"
            src="/images/Vector (11).svg"
            style={{ marginBottom: 'clamp(24px,3.70vw, 56px)' }}
          />
          <OurMissionTitle>our missions</OurMissionTitle>
          <OurMissionText>Red Mango provides a wholesome and indulgent treat</OurMissionText>
        </MaxWidthWrapper>
      </OurMission>
    </>
  );
};

export default HowItStarted;
