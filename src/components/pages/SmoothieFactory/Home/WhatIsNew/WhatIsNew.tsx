'use client';

import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';
import { Title } from './WhatIsNew.style';
import { WhatsNewSlice } from 'prismicio-types';

const WhatIsNew: FC<{ slice: WhatsNewSlice }> = ({
  slice: {
    primary: { title },
  },
}) => {
  return (
    <MaxWidthWrapper>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
    </MaxWidthWrapper>
  );
};

export default WhatIsNew;
