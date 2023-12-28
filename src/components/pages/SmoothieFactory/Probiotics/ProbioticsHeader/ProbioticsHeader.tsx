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

const ProbioticsHeader: FC = () => (
  <>
    <StyledMaxWidthWrapper>
      <Wrapper>
        <Content>
          <Title>All probiotics are not equal</Title>
          <Subtitle>Sometimes, bacteria can be a good thing</Subtitle>
          <Text>
            More than 400 types of bacteria live in the human digestive system. Many of these bacteria types are “good
            bacteria” or “probiotics” - they help the digestive system to do its job.
          </Text>
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
              <Description>Aid digestion by breaking down sugars</Description>
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
              <Description>Aid digestion by breaking down sugars</Description>
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
              <Description>Aid digestion by breaking down sugars</Description>
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
