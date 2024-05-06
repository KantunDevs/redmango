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
import { ProbioticsHeaderSlice } from 'prismicio-types';
import { PrismicImage } from '@prismicio/react';

const ProbioticsHeader: FC<{ slice: ProbioticsHeaderSlice }> = ({
  slice: {
    primary: { title, subtitle, text, image },
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
          <PrismicImage
            field={image}
            style={{
              objectFit: 'cover',
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
            }}
          />
        </ImageContainer>
      </Wrapper>
    </StyledMaxWidthWrapper>
  </>
);

export default ProbioticsHeader;
