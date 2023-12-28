'use client';

import type { FC } from 'react';

import {
  Title,
  Row,
  TextArea,
  TextAreaTitle,
  Paragraph,
  ImageContainer,
  StyledMaxWidthWrapper,
} from './HealthBenefits.style';
import Image from 'next/image';

const HealthBenefits: FC = () => (
  <>
    <StyledMaxWidthWrapper>
      <Title>health benefits</Title>
      <Row>
        <TextArea>
          <TextAreaTitle textAlignRight>DIGESTIVE HEALTH</TextAreaTitle>
          <Paragraph textAlignRight>
            Taking probiotics can re-populate the digestive tract with healthful bacteria. improving digestive
            management
          </Paragraph>
          <Paragraph textAlignRight>
            Probiotics can be helpful for people with irritable bowel syndrome, or IBS
          </Paragraph>
        </TextArea>
        <ImageContainer>
          <Image alt="DIGESTIVE HEALTH" src="/images/Rectangle 106 (5).jpg" fill style={{ objectFit: 'cover' }} />
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer order>
          <Image alt="DIGESTIVE HEALTH" src="/images/Rectangle 106 (5).jpg" fill style={{ objectFit: 'cover' }} />
        </ImageContainer>
        <TextArea>
          <TextAreaTitle>DIGESTIVE HEALTH</TextAreaTitle>
          <Paragraph>
            Taking probiotics can re-populate the digestive tract with healthful bacteria. improving digestive
            management
          </Paragraph>
          <Paragraph>Probiotics can be helpful for people with irritable bowel syndrome, or IBS</Paragraph>
        </TextArea>
      </Row>
    </StyledMaxWidthWrapper>
  </>
);

export default HealthBenefits;
