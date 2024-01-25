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
  Icons,
  Circle,
  Icon,
  Description,
} from './ProbioticsHeader.style';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { ProbioticsHeaderSlice } from 'prismicio-types';

const ProbioticsHeader: FC<{ slice: ProbioticsHeaderSlice }> = ({
  slice: {
    primary: { title, subtitle, text, advantage_1, advantage_2, advantage_3 },
  },
}) => (
  <>
    <StyledMaxWidthWrapper>
      <Wrapper>
        <Content>
          <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
          <Subtitle dangerouslySetInnerHTML={{ __html: subtitle as string }}></Subtitle>
          <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
          <Icons>
            <Icon>
              <Circle>
                <FloatingImage
                  alt="icon"
                  height="clamp(46px,4.10vw, 62px)"
                  width="clamp(46px,4.10vw, 62px)"
                  src="/images/taste (1).svg"
                />
              </Circle>
              <Description dangerouslySetInnerHTML={{ __html: advantage_1 as string }}></Description>
            </Icon>
            <Icon>
              <Circle>
                <FloatingImage
                  alt="icon"
                  height="clamp(46px,4.10vw, 62px)"
                  width="clamp(46px,4.10vw, 62px)"
                  src="/images/Icon (9).svg"
                />
              </Circle>
              <Description dangerouslySetInnerHTML={{ __html: advantage_2 as string }}></Description>
            </Icon>
            <Icon>
              <Circle>
                <FloatingImage
                  alt="icon"
                  height="clamp(46px,4.10vw, 62px)"
                  width="clamp(46px,4.10vw, 62px)"
                  src="/images/taste (2).svg"
                />
              </Circle>
              <Description dangerouslySetInnerHTML={{ __html: advantage_3 as string }}></Description>
            </Icon>
          </Icons>
        </Content>
        <ImageContainer>
          <Image alt="bg" src="/images/image 51 (3).jpg" fill style={{ objectFit: 'cover' }} />
        </ImageContainer>
      </Wrapper>
    </StyledMaxWidthWrapper>
  </>
);

export default ProbioticsHeader;
