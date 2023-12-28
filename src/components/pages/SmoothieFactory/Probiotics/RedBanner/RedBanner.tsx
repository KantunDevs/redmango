'use client';

import type { FC } from 'react';

import { Bg } from './RedBanner.style';
import { Title } from '../../Home/common';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const RedBanner: FC = () => (
  <>
    <Bg>
      <FloatingImage
        alt="circle"
        top="0%"
        left="0%"
        height="clamp(275px,37.16vw, 562px)"
        width="clamp(284px,38.3vw, 580px)"
        src="/images/Vector (9).svg"
      />
      <FloatingImage
        alt="circle"
        top="0%"
        right="0%"
        height="clamp(275px,37.16vw, 562px)"
        width="clamp(284px,38.3vw, 580px)"
        src="/images/Vector (9).svg"
      />
      <Title color="#FFFFFF" style={{ maxWidth: '931px', textAlign: 'center' }}>
        Only certain probiotics, like Red Mango's Super Biotics*, are clinically proven to deliver health benefits.
      </Title>
    </Bg>
  </>
);

export default RedBanner;
