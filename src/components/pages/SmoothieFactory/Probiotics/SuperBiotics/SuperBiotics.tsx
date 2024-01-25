'use client';

import type { FC } from 'react';

import { LeftColumn, StyledMaxWidthWrapper, RightColumn, LeftColumnTitle } from './SuperBiotics.style';
import { Paragraph } from '../HealthBenefits/HealthBenefits.style';
import { Title } from '../../Home/common';
import Image from 'next/image';
import { SuperBioticsSlice } from 'prismicio-types';

const SuperBiotics: FC<{ slice: SuperBioticsSlice }> = ({
  slice: {
    primary: { title_1, text_1, text_2 },
  },
}) => (
  <>
    <StyledMaxWidthWrapper>
      <LeftColumn>
        <LeftColumnTitle dangerouslySetInnerHTML={{ __html: title_1 as string }}></LeftColumnTitle>
        <Paragraph style={{ maxWidth: '552px' }} dangerouslySetInnerHTML={{ __html: text_1 as string }}></Paragraph>
      </LeftColumn>
      <RightColumn>
        <Image src="/images/image 81.jpg" fill alt="bg" style={{ zIndex: -1 }} />
        <Title color="#CB333B" dangerouslySetInnerHTML={{ __html: text_2 as string }}></Title>
      </RightColumn>
    </StyledMaxWidthWrapper>
  </>
);

export default SuperBiotics;
