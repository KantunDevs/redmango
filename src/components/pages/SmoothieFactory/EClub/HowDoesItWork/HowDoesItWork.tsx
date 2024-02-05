'use client';

import {
  Wrapper,
  HowDoesItWorkTitle,
  Step,
  Steps,
  StepTitle,
  StepSubtitle,
  StepContent,
  RelativeWrapper,
  ImageContainer,
} from './HowDoesItWork.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { MaxWidthWrapper } from '@styles/common';
import { HowDoesItWorkSlice } from 'prismicio-types';

import type { FC } from 'react';

const HowDoesItWork: FC<{ slice: HowDoesItWorkSlice }> = ({
  slice: {
    primary: { title, step_1, step_2, step_3 },
  },
}) => (
  <RelativeWrapper>
    <MaxWidthWrapper>
      <FloatingImage
        alt="circle"
        top="0%"
        height="clamp(601px ,81.54vw, 1233px)"
        left="0%"
        src="/images/Vector (8).svg"
        width="clamp(117px,15.93vw, 241px)"
      />
      <Wrapper>
        <HowDoesItWorkTitle dangerouslySetInnerHTML={{ __html: title as string }}></HowDoesItWorkTitle>
        <Steps>
          <Step>
            <StepContent>
              <FloatingImage
                alt="flag"
                height="clamp(32px, 4.10vw, 62px)"
                src="/images/Icon.svg"
                width="clamp(39px, 4.10vw, 62px)"
              />

              <StepTitle>01</StepTitle>
              <StepSubtitle dangerouslySetInnerHTML={{ __html: step_1 as string }}></StepSubtitle>
            </StepContent>
            <ImageContainer>
              <FloatingImage
                alt="sign up"
                height="clamp(314px ,29.62vw, 448px)"
                src="/images/Rectangle 106 (2).jpg"
                width="clamp(215px, 20.37vw, 308px)"
              />
              <FloatingImage
                alt="pattern"
                height="clamp(295px, 27.91vw, 422px)"
                src="/images/Frame 143.png"
                width="clamp(43px, 4.10vw, 62px)"
              />
            </ImageContainer>
          </Step>
          <Step reverseOnMobile>
            <ImageContainer>
              <FloatingImage
                alt="pattern"
                height="clamp(295px, 27.91vw, 422px)"
                src="/images/Frame 143 (1).png"
                width="clamp(43px, 4.10vw, 62px)"
              />
              <FloatingImage
                alt="sign up"
                height="clamp(314px ,29.62vw, 448px)"
                src="/images/pexels-nadi-lindsay-4908011 1.jpg"
                width="clamp(272px, 20.37vw, 308px)"
              />
            </ImageContainer>
            <StepContent alignStart>
              <FloatingImage
                alt="flag"
                height="clamp(32px, 4.10vw, 62px)"
                src="/images/Icon (2).svg"
                width="clamp(39px, 4.10vw, 62px)"
              />

              <StepTitle>02</StepTitle>
              <StepSubtitle dangerouslySetInnerHTML={{ __html: step_2 as string }}></StepSubtitle>
            </StepContent>
          </Step>
          <Step>
            <StepContent>
              <FloatingImage
                alt="flag"
                height="clamp(32px, 4.10vw, 62px)"
                src="/images/Icon.svg"
                width="clamp(39px, 4.10vw, 62px)"
              />
              <StepTitle>03</StepTitle>
              <StepSubtitle dangerouslySetInnerHTML={{ __html: step_3 as string }}></StepSubtitle>
            </StepContent>
            <ImageContainer>
              <FloatingImage
                alt="sign up"
                height="clamp(314px ,29.62vw, 448px)"
                src="/images/Rectangle 106 (3).jpg"
                width="clamp(215px, 20.37vw, 308px)"
              />
              <FloatingImage
                alt="pattern"
                height="clamp(295px, 27.91vw, 422px)"
                src="/images/Frame 143 (2).png"
                width="clamp(43px, 4.10vw, 62px)"
              />
            </ImageContainer>
          </Step>
        </Steps>
      </Wrapper>
    </MaxWidthWrapper>
  </RelativeWrapper>
);

export default HowDoesItWork;
