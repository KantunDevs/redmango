'use client';

import type { FC } from 'react';

import { Bg } from './RedBanner.style';
import { Title } from '../../Home/common';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { RedBannerSlice } from 'prismicio-types';

const RedBanner: FC<{ slice: RedBannerSlice }> = ({
  slice: {
    primary: { title },
  },
}) => (
  <>
    <Bg>
      <FloatingImage
        alt="circle"
        top="-18%"
        left="-67%"
        height="clamp(316px, 37.16vw, 562px)"
        width="clamp(326px, 38.3vw, 580px)"
        src="/images/white-circle.svg"
      />
      <FloatingImage
        alt="circle"
        bottom="5%"
        right="59%"
        height="clamp(221px,26.05vw, 394px)"
        width="clamp(228px,26.91vw, 407px)"
        src="/images/white-circle.svg"
      />
      <Title
        color="#FFFFFF"
        style={{ maxWidth: '931px', textAlign: 'center' }}
        dangerouslySetInnerHTML={{ __html: title as string }}
      ></Title>
    </Bg>
  </>
);

export default RedBanner;
