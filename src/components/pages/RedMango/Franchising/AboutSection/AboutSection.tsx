'use client';

import Image from 'next/image';
import { useCallback } from 'react';

import Button from '@components/pages/RedMango/Button';

import {
  Container,
  ContentLeft,
  ContentRight,
  Description,
  ImageContainer,
  Row,
  Subtitle,
  Title,
} from './AboutSection.styles';

import type { FC } from 'react';
import { FranchisingAboutSectionSlice } from 'prismicio-types';

const AboutSection: FC<{ slice: FranchisingAboutSectionSlice }> = ({
  slice: {
    primary: { title, subtitle, description, subtitle_2, description_2, subtitle_3, description_3 },
  },
}) => {
  const onClickHandle = useCallback(() => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView();
  }, []);

  return (
    <Container>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <Row>
        <ContentLeft>
          <Subtitle dangerouslySetInnerHTML={{ __html: subtitle as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: description as string }}></Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={499} src="/images/rm-about-1.png" width={640} />
        </ImageContainer>
      </Row>
      <Row>
        <ImageContainer>
          <Image alt="first-row-image" height={620} src="/images/rm-about-2.png" width={640} />
        </ImageContainer>
        <ContentRight>
          <Subtitle dangerouslySetInnerHTML={{ __html: subtitle_2 as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: description_2 as string }}></Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentRight>
      </Row>
      <Row>
        <ContentLeft>
          <Subtitle dangerouslySetInnerHTML={{ __html: subtitle_3 as string }}></Subtitle>
          <Description dangerouslySetInnerHTML={{ __html: description_3 as string }}></Description>
          <Button label="Learn more" onClick={onClickHandle} />
        </ContentLeft>
        <ImageContainer>
          <Image alt="first-row-image" height={620} src="/images/rm-about-3.png" width={640} />
        </ImageContainer>
      </Row>
    </Container>
  );
};

export default AboutSection;
