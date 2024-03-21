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
import { HealthBenefitsSlice } from 'prismicio-types';
import { PrismicImage } from '@prismicio/react';

const HealthBenefits: FC<{ slice: HealthBenefitsSlice }> = ({
  slice: {
    primary: {
      title,
      benefit_1_title,
      benefit_1_text,
      benefit_1_image,
      benefit_2_image,
      benefit_2_title,
      benefit_2_text,
      benefit_3_image,
      benefit_3_title,
      benefit_3_text,
    },
  },
}) => (
  <>
    <StyledMaxWidthWrapper>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <Row>
        <TextArea>
          <TextAreaTitle textAlignRight dangerouslySetInnerHTML={{ __html: benefit_1_title as string }}></TextAreaTitle>
          <Paragraph textAlignRight dangerouslySetInnerHTML={{ __html: benefit_1_text as string }}></Paragraph>
        </TextArea>
        <ImageContainer>
          <PrismicImage
            field={benefit_1_image}
            style={{
              objectFit: 'cover',
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
            }}
          />
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer order>
          <PrismicImage
            field={benefit_2_image}
            style={{
              objectFit: 'cover',
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
            }}
          />
        </ImageContainer>
        <TextArea>
          <TextAreaTitle textAlignRight dangerouslySetInnerHTML={{ __html: benefit_2_title as string }}></TextAreaTitle>
          <Paragraph textAlignRight dangerouslySetInnerHTML={{ __html: benefit_2_text as string }}></Paragraph>
        </TextArea>
      </Row>
      <Row>
        <TextArea>
          <TextAreaTitle textAlignRight dangerouslySetInnerHTML={{ __html: benefit_3_title as string }}></TextAreaTitle>
          <Paragraph textAlignRight dangerouslySetInnerHTML={{ __html: benefit_3_text as string }}></Paragraph>
        </TextArea>
        <ImageContainer>
          <PrismicImage
            field={benefit_3_image}
            style={{
              objectFit: 'cover',
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
            }}
          />
        </ImageContainer>
      </Row>
    </StyledMaxWidthWrapper>
  </>
);

export default HealthBenefits;
