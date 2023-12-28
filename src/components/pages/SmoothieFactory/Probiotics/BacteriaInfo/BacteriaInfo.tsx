'use client';

import type { FC } from 'react';

import { StyledMaxWidthWrapper, Title } from './BacteriaInfo.style';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { Paragraph } from '../HealthBenefits/HealthBenefits.style';

const BacteriaInfo: FC = () => (
  <StyledMaxWidthWrapper>
    <FloatingImage
      style={{ marginBottom: 'clamp(30px, 3.57vw, 54px)' }}
      alt="crown"
      src="/images/Group 121 (1).svg"
      height="clamp(100px, 11.97vw, 181px)"
      width="clamp(100px, 11.97vw, 181px)"
    />
    <Title>
      This patented strain of probiotic bacteria is clinically proven to support the digestive and immune systems**
    </Title>
    <Paragraph style={{ textAlign: 'center', maxWidth: '814px' }}>
      Inside each cell of the bacteria is a hardened structure, or spore which is similar to a seed. It serves as a
      natural protective shield against the heat and pressure of manufacturing and the strong acids in your stomach.
    </Paragraph>
    <Paragraph style={{ textAlign: 'center', maxWidth: '814px' }}>
      Red Mango's Super Biotics are designed to survive and thrive in the stomach. so more cultures and viable cells are
      delivered than with ordinary yogurt.***
    </Paragraph>
  </StyledMaxWidthWrapper>
);

export default BacteriaInfo;
