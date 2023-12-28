'use client';

import type { FC } from 'react';

import { LeftColumn, StyledMaxWidthWrapper, RightColumn, LeftColumnTitle } from './SuperBiotics.style';
import { Paragraph } from '../HealthBenefits/HealthBenefits.style';
import { Title } from '../../Home/common';
import Image from 'next/image';

const SuperBiotics: FC = () => (
  <>
    <StyledMaxWidthWrapper>
      <LeftColumn>
        <LeftColumnTitle>RED MANGO'S SUPER BIOTICS</LeftColumnTitle>
        <Paragraph style={{ maxWidth: '552px' }}>
          Many probiotics found in capsules and other yogurts are extremely fragile. Few survive the stomach acid and go
          on to populate the intestines, providing minimal health benefits. Some producers even use processes that kill
          these beneficial cultures. Not at Red Mango.
        </Paragraph>
      </LeftColumn>
      <RightColumn>
        <Image src="/images/image 81.jpg" fill alt="bg" style={{ zIndex: -1 }} />
        <Title color="#CB333B">
          RED MANGO IS THE ONLY YOGURT AND SMOOTHIE RETAILER THAT FORTIFIES ITS YOGURT WITH SPECIAL "SUPER BIOTICS*"
        </Title>
      </RightColumn>
    </StyledMaxWidthWrapper>
  </>
);

export default SuperBiotics;
