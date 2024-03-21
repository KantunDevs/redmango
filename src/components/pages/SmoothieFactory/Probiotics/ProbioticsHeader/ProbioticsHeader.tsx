'use client';

import type { FC } from 'react';
import {
  Wrapper,
  StyledMaxWidthWrapper,
  Content,
  Title,
  Text,
  ImageContainer,
  Subtitle,
} from './ProbioticsHeader.style';
import Image from 'next/image';
import { ProbioticsHeaderSlice } from 'prismicio-types';

const ProbioticsHeader: FC<{ slice: ProbioticsHeaderSlice }> = ({
  slice: {
    primary: { title, subtitle, text },
  },
}) => (
  <>
    <StyledMaxWidthWrapper>
      <Wrapper>
        <Content>
          <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
          <Subtitle dangerouslySetInnerHTML={{ __html: subtitle as string }}></Subtitle>
          <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
        </Content>
        <ImageContainer>
          <Image alt="bg" src="/images/image 51 (3).jpg" fill style={{ objectFit: 'cover' }} />
        </ImageContainer>
      </Wrapper>
    </StyledMaxWidthWrapper>
  </>
);

export default ProbioticsHeader;
