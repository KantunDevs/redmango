'use client';

import type { FC } from 'react';
import {
  Header,
  Container,
  LeftColumn,
  RightColumn,
  ColumnContainer,
  StyledMaxWidthWrapper,
  Title,
  Text,
} from './ThankYou.style';
import Image from 'next/image';
import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import { ThankYouSlice } from 'prismicio-types';

const ThankYou: FC<{ slice: ThankYouSlice }> = ({
  slice: {
    primary: { title, text },
  },
}) => (
  <Container>
    <Header>
      <Image fill src="/images/thank-you-bg.jpg" alt="bg" style={{ objectFit: 'cover', objectPosition: 'center' }} />
    </Header>
    <StyledMaxWidthWrapper>
      <ColumnContainer>
        <LeftColumn>
          <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
          <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
        </LeftColumn>
        <RightColumn>
          <FloatingImage
            src="/images/image 51.png"
            width="clamp(229px, 30.29vw, 458px)"
            alt="bg"
            height="clamp(229px,30.29vw, 458px)"
          />
        </RightColumn>
      </ColumnContainer>
    </StyledMaxWidthWrapper>
  </Container>
);

export default ThankYou;
