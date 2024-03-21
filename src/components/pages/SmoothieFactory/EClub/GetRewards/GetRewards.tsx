'use client';

import { FloatingBgImage, Glass, GlassTitle, GlassText, Wrapper } from './GetRewards.style';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import { GetRewardsSlice } from 'prismicio-types';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const GetRewards: FC<{ slice: GetRewardsSlice }> = ({
  slice: {
    primary: { title, text, button },
  },
}) => (
  <Wrapper>
    <FloatingImage
      top="0%"
      left="0%"
      alt="e-club bg"
      height="clamp(688px, 65.01vw, 983px)"
      src="/images/eclub-bg.svg"
      width="clamp(716px, 67.72vw, 1024px)"
    />
    <Glass>
      <GlassTitle dangerouslySetInnerHTML={{ __html: title as string }}></GlassTitle>
      <GlassText dangerouslySetInnerHTML={{ __html: text as string }}></GlassText>
      <CtaButton dangerouslySetInnerHTML={{ __html: button as string }}></CtaButton>
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
