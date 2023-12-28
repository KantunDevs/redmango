'use client';

import { FloatingBgImage, Glass, GlassTitle, GlassText, Wrapper, LottieWrapper } from './GetRewards.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';

const GetRewards: FC = () => (
  <Wrapper>
    <Glass>
      <GlassTitle>Join us and get rewards!</GlassTitle>
      <GlassText>
        Join Red Mango's E-Club and get exclusive access to delicious deals and exciting promotions! As a member, you'll
        be the first to know about our new flavors, menu items, and special events. Plus, you'll receive a free birthday
        treat each year! Sign up today and start enjoying the sweet rewards.
      </GlassText>
      <CtaButton>Join now</CtaButton>
    </Glass>
    <FloatingBgImage
      alt="e-club bg"
      height="clamp(650px, 58.46vw, 884px)"
      src="/images/image 67.jpg"
      width="clamp(483px, 45.43vw, 687px)"
      imageStyle={{ objectFit: 'cover' }}
    />
  </Wrapper>
);

export default GetRewards;
