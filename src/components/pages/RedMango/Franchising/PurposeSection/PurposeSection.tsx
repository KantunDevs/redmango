'use client';

import { FranchisingPurposeSectionSlice } from 'prismicio-types';
import {
  Container,
  ContentContainer,
  Text,
  StyledLogo,
  StyledLeftCircle,
  StyledRightCircle,
  StledDivider,
} from './PurposeSection.styles';

import type { FC } from 'react';

const PurposeSection: FC<{ slice: FranchisingPurposeSectionSlice }> = ({
  slice: {
    primary: { text },
  },
}) => (
  <Container>
    <ContentContainer>
      <StyledLogo alt="circularImage" src="/images/PurposeSectionMainLogo.png" />
      <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
      <StyledLeftCircle alt="circularBackgroundDecoration" src="/images/PurposeSectionLeftVector.png" />
      <StyledRightCircle alt="circularBackgroundDecoration" src="/images/PurposeSectionRightVector.png" />
    </ContentContainer>
    <StledDivider alt="BackgroundDivider" src="/images/DividerMenuPurposeSection.png" />
  </Container>
);

export default PurposeSection;
