'use client';

import { FranchisingHowToSectionSlice } from 'prismicio-types';
import {
  BackgroundContainer,
  Container,
  StepContainer,
  StepContent,
  StepDescription,
  StepNumber,
  StepTitle,
  TitlePartOne,
  TitlePartTwo,
} from './HowToSection.styles';

import type { FC } from 'react';

const HowToSection: FC<{ slice: FranchisingHowToSectionSlice }> = ({
  slice: {
    items,
    primary: { title_first_part, title_second_part },
  },
}) => (
  <BackgroundContainer>
    <Container>
      <TitlePartOne dangerouslySetInnerHTML={{ __html: title_first_part as string }}></TitlePartOne>
      <TitlePartTwo dangerouslySetInnerHTML={{ __html: title_second_part as string }}></TitlePartTwo>
      {items.map(({ title, text }, index) => (
        <StepContainer key={index}>
          <StepNumber>{index + 1}.</StepNumber>
          <StepContent>
            <StepTitle dangerouslySetInnerHTML={{ __html: title as string }}></StepTitle>
            <StepDescription dangerouslySetInnerHTML={{ __html: text as string }} />
          </StepContent>
        </StepContainer>
      ))}
    </Container>
  </BackgroundContainer>
);

export default HowToSection;
