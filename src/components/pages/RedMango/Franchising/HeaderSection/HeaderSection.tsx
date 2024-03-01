'use client';

import {
  CardsContainer,
  CardText,
  CardContentContainer,
  MainText,
  SectionContainer,
  Text,
  TextContent,
  StyledMaxWidthWrapper,
  Bg,
  BgWrapper,
} from './HeaderSection.styles';

import { useEffect, type FC } from 'react';
import { FranchisingHeaderSlice } from 'prismicio-types';
import FormSection from '../FormSection';
import Image from 'next/image';
import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';

const HeaderSection: FC<{ slice: FranchisingHeaderSlice }> = ({
  slice: {
    items,
    primary: { title, text },
  },
}) => {
  useEffect(() => {
    if (window.top) {
      window.top.postMessage({ height: document.body.clientHeight, type: 'iframeLoaded' }, '*');
    }

    const observer = new ResizeObserver(() => {
      if (window.top) {
        window.top.postMessage({ height: document.body.clientHeight, type: 'iframeLoaded' }, '*');
      }
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SectionContainer id="contact">
      <BgWrapper>
        <StyledMaxWidthWrapper>
          <TextContent>
            <MainText dangerouslySetInnerHTML={{ __html: title as string }}></MainText>
            <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
          </TextContent>
          <FormSection />
        </StyledMaxWidthWrapper>
      </BgWrapper>
      <Bg>
        <Image fill alt="bg" src="/images/image 43.jpg" style={{ objectFit: 'cover' }} />
        <CardsContainer>
          {items.map(({ text }) => (
            <CardContentContainer key={text}>
              <FloatingImage
                src="/images/franchising_item_bg.svg"
                width="clamp(200px, 20.83vw, 315px)"
                alt="bg"
                height="clamp(244px,20.23vw, 306px)"
              />
              <CardText dangerouslySetInnerHTML={{ __html: text as string }}></CardText>
            </CardContentContainer>
          ))}
        </CardsContainer>
      </Bg>
    </SectionContainer>
  );
};

export default HeaderSection;
