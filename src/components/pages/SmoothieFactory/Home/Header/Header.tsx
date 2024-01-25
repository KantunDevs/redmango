'use client';

import { Container, Content, Title, Flavors, StyledMaxWidthWrapper, Text, BG, WhiteBG } from './Header.style';

import { useState, type FC } from 'react';
import { Button } from '@styles/common';
import { HomepageHeaderSlice } from 'prismicio-types';
import FlavorItemComponent from './FlavorItem';
import Image from 'next/image';
import { FloatingIconImage } from '../../OrangeLeaf/GiftCards/GiftCardsSection/GiftCardsSection.style';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const slides = [
  {
    text: 'SWEET',
    animationText: '100% NATURAL',
    image: '/images/image 44.jpg',
    icon: '/images/taste (3).svg',
  },
  {
    text: 'NO FAT',
    animationText: 'SALTY',
    image: '/images/image 44 (1).jpg',
    icon: '/images/taste (4).svg',
  },
  {
    text: 'GLUTEN FREE',
    animationText: 'SOUR',
    image: '/images/image 44 (2).jpg',
    icon: '/images/taste (5).svg',
  },
  {
    text: 'PROBIOTC RICH',
    animationText: 'SPICY',
    image: '/images/image 44 (3).jpg',
    icon: '/images/taste (6).svg',
  },
];

export const INITIAL_IMG = '/images/red-mango-home-header-bg.jpg';

const Header: FC<{ slice: HomepageHeaderSlice }> = ({
  slice: {
    primary: { title, text, button },
  },
}) => {
  const [image, setImage] = useState<string>(INITIAL_IMG);
  const [icon, setIcon] = useState<null | string>(null);

  return (
    <>
      <Container>
        <StyledMaxWidthWrapper>
          <Content>
            <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
            <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
            <Button dangerouslySetInnerHTML={{ __html: button as string }}></Button>
          </Content>
          <Flavors>
            {slides.map((slide, index) => (
              <FlavorItemComponent slide={slide} key={index} setImage={setImage} setIcon={setIcon} />
            ))}
          </Flavors>
        </StyledMaxWidthWrapper>
      </Container>
      <BG
        key={image}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        {icon ? (
          <WhiteBG>
            <FloatingImage alt="icon" src={icon} width="155px" height="155px" />
          </WhiteBG>
        ) : null}
        <Image alt="first-row-image" fill src={image} style={{ objectFit: 'cover' }} />
      </BG>
    </>
  );
};

export default Header;
