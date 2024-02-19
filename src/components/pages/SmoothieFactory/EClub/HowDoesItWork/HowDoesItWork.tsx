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
              <StepTitle>01</StepTitle>
              <StepSubtitle dangerouslySetInnerHTML={{ __html: step_1 as string }}></StepSubtitle>
            </StepContent>
            <FloatingImage
              alt="flag"
              height="clamp(43px, 4.10vw, 62px)"
              src="/images/Icon (2).svg"
              width="clamp(43px, 4.10vw, 62px)"
            />
          </Step>
          <Step reverseOnMobile>
            <FloatingImage
              alt="flag"
              height="clamp(43px, 4.10vw, 62px)"
              src="/images/Icon (3).svg"
              width="clamp(43px, 4.10vw, 62px)"
            />
            <StepContent alignStart>
              <StepTitle>02</StepTitle>
              <StepSubtitle dangerouslySetInnerHTML={{ __html: step_2 as string }}></StepSubtitle>
            </StepContent>
          </Step>
          <Step>
            <StepContent>
              <StepTitle>03</StepTitle>
              <StepSubtitle dangerouslySetInnerHTML={{ __html: step_3 as string }}></StepSubtitle>
            </StepContent>
            <FloatingImage
              alt="flag"
              height="clamp(43px, 4.10vw, 62px)"
              src="/images/Icon (4).svg"
              width="clamp(43px, 4.10vw, 62px)"
            />
          </Step>
        </Steps>
      </Wrapper>
    </MaxWidthWrapper>
  </RelativeWrapper>
);

export default HowDoesItWork;
