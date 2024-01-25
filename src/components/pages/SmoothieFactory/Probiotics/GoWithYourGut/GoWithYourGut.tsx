'use client';

import type { FC } from 'react';

import { MainTitle, Bg, Disclaimer } from './GoWithYourGut.style';
import { Paragraph } from '../HealthBenefits/HealthBenefits.style';
import { Title } from '../../Home/common';
import { GoWithYourGutSlice } from 'prismicio-types';

const GoWithYourGut: FC<{ slice: GoWithYourGutSlice }> = ({
  slice: {
    primary: { main_title, title, disclaimer_1, disclaimer_2, disclaimer_3, disclaimer_4 },
  },
}) => (
  <>
    <Bg>
      <MainTitle dangerouslySetInnerHTML={{ __html: main_title as string }}></MainTitle>
      <Title
        color="#FFFFFF"
        style={{ maxWidth: '935px' }}
        dangerouslySetInnerHTML={{ __html: title as string }}
      ></Title>
    </Bg>
    <Disclaimer>
      <Paragraph dangerouslySetInnerHTML={{ __html: disclaimer_1 as string }}></Paragraph>
      <Paragraph dangerouslySetInnerHTML={{ __html: disclaimer_2 as string }}></Paragraph>
      <Paragraph dangerouslySetInnerHTML={{ __html: disclaimer_3 as string }}></Paragraph>
      <Paragraph dangerouslySetInnerHTML={{ __html: disclaimer_4 as string }}></Paragraph>
    </Disclaimer>
  </>
);

export default GoWithYourGut;
