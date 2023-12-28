'use client';

import type { FC } from 'react';

import { MainTitle, Bg, Disclaimer } from './GoWithYourGut.style';
import { Paragraph } from '../HealthBenefits/HealthBenefits.style';
import Image from 'next/image';
import { Title } from '../../Home/common';

const GoWithYourGut: FC = () => (
  <>
    <Bg>
      <MainTitle>GO WITH YOUR GUT.</MainTitle>
      <Title color="#FFFFFF" style={{ maxWidth: '935px' }}>
        GET YOUR DAILY DOSE OF RED MANGO FROZEN YOGURT TODAY!
      </Title>
    </Bg>
    <Disclaimer>
      <Paragraph>
        These statements have not been evaluated by the Food and Drug Administration. This product is not intended to
        diagnose, treat, cure or prevent any disease.
      </Paragraph>
      <Paragraph>
        +The term &gt;Super Biotics&lt; refers to GanedenBC, a patented strain of probiotic, bacteria used by Red Mango.
        For more information, visit www.gardenbc.com
      </Paragraph>
      <Paragraph>** As part of balanced diet and healthy lifestyle</Paragraph>
      <Paragraph>
        *** In an independent lab study of simulated gastric environment with a pH of 2.0 for two hours, GenedenBC,
        delivered more than ten times the live cells than common probiotic yogurt cultures.
      </Paragraph>
    </Disclaimer>
  </>
);

export default GoWithYourGut;
