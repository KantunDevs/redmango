'use client';

import Image from 'next/image';
import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';

import { ContentWrapper, Text, Title, OurMission, OurMissionText, OurMissionTitle } from './HowItStarted.style';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { HowItStartedSlice } from 'prismicio-types';

const HowItStarted: FC<{ slice: HowItStartedSlice }> = ({
  slice: {
    primary: { title, text_1, text_2, mission_title, mission_text },
  },
}) => (
  <>
    <ContentWrapper>
      <MaxWidthWrapper style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Image alt="bg" src="/images/about-us-bg.jpg" style={{ objectFit: 'cover', zIndex: -1 }} fill />
        <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
        <Text
          style={{ marginBottom: 'clamp(26px,1.85vw, 28px)' }}
          dangerouslySetInnerHTML={{ __html: text_1 as string }}
        ></Text>
        <Text dangerouslySetInnerHTML={{ __html: text_2 as string }}></Text>
      </MaxWidthWrapper>
    </ContentWrapper>
    <OurMission>
      <FloatingImage
        width="clamp(326px,38.35vw, 580px)"
        height="clamp(316px, 37.16vw, 562px)"
        alt="bg"
        left="-55%"
        top="-23%"
        src="/images/white-circle.svg"
      />
      <FloatingImage
        width="clamp(228px,26.91vw, 407px)"
        height="clamp(221px, 26.05vw, 394px)"
        alt="bg"
        right="78%"
        bottom="16%"
        src="/images/white-circle.svg"
      />
      <MaxWidthWrapper style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <FloatingImage
          width="clamp(82px,7.47vw, 113px)"
          height="clamp(80px, 7.27vw, 110px)"
          alt="logo"
          src="/images/Vector (11).svg"
          style={{ marginBottom: 'clamp(24px,3.70vw, 56px)' }}
        />
        <OurMissionTitle dangerouslySetInnerHTML={{ __html: mission_title as string }}></OurMissionTitle>
        <OurMissionText dangerouslySetInnerHTML={{ __html: mission_text as string }}></OurMissionText>
      </MaxWidthWrapper>
    </OurMission>
  </>
);

export default HowItStarted;
