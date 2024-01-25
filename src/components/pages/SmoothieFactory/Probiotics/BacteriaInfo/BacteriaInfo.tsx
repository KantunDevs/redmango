'use client';

import type { FC } from 'react';

import { StyledMaxWidthWrapper, Title } from './BacteriaInfo.style';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { Paragraph } from '../HealthBenefits/HealthBenefits.style';
import { BacteriaInfoSlice } from 'prismicio-types';

const BacteriaInfo: FC<{ slice: BacteriaInfoSlice }> = ({
  slice: {
    primary: { title, paragraph_1, paragraph_2 },
  },
}) => (
  <StyledMaxWidthWrapper>
    <FloatingImage
      style={{ marginBottom: 'clamp(30px, 3.57vw, 54px)' }}
      alt="crown"
      src="/images/Group 121 (1).svg"
      height="clamp(100px, 11.97vw, 181px)"
      width="clamp(100px, 11.97vw, 181px)"
    />
    <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
    <Paragraph
      style={{ textAlign: 'center', maxWidth: '814px' }}
      dangerouslySetInnerHTML={{ __html: paragraph_1 as string }}
    ></Paragraph>
    <Paragraph
      style={{ textAlign: 'center', maxWidth: '814px' }}
      dangerouslySetInnerHTML={{ __html: paragraph_2 as string }}
    ></Paragraph>
  </StyledMaxWidthWrapper>
);

export default BacteriaInfo;
