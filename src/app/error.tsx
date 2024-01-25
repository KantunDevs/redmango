'use client';

import { FlexWrapper, SubTitle, Wrapper, Numbers, Number, Title, OverflowContainer } from './not-found.style';

import type { FC } from 'react';
import Link from 'next/link';

import { Button, MaxWidthWrapper } from '@styles/common';
import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import Image from 'next/image';

const Error = ({ reset }: { reset: () => void }) => (
  <MaxWidthWrapper>
    <Title>Error:</Title>
    <Wrapper>
      <FlexWrapper>
        <Numbers>
          <Number>4</Number>
          <Number>0</Number>
          <Number>4</Number>
        </Numbers>
        <SubTitle>Something went wrong!</SubTitle>
        <Button style={{ background: '#CB333B', color: '#fff' }} onClick={reset}>
          Reload
        </Button>
      </FlexWrapper>
      <FlexWrapper>
        <FloatingImage
          alt="cup"
          src="/images/image 51 (2).png"
          width="clamp(340px,32.07vw, 485px)"
          right="-7%"
          bottom="17%"
          style={{ zIndex: 2 }}
          height="clamp(340px, 32.07vw,485px)"
        />
        <OverflowContainer>
          <FloatingImage
            alt="bg"
            src="/images/Group 153 (1).svg"
            width="695px"
            right="-1%"
            bottom="1%"
            style={{ zIndex: 1, transform: 'translate(22%, 46%) rotate(154.31deg)' }}
            height="674px"
          />
        </OverflowContainer>
      </FlexWrapper>
    </Wrapper>
  </MaxWidthWrapper>
);

export default Error;
