'use client';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';
import { Title } from './WhatIsNew.style';
import { WhatsNewSlice } from 'prismicio-types';

const WhatIsNew: FC<{ slice: WhatsNewSlice }> = ({
  slice: {
    primary: { title },
  },
}) => (
  <MaxWidthWrapper>
    <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
  </MaxWidthWrapper>
);

export default WhatIsNew;
