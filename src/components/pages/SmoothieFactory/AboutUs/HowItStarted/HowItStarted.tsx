'use client';

import Image from 'next/image';
import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';
import { Title } from '../../Home/common';

import {
  ContentWrapper,
  FloatingOrangeShapeImage,
  Text,
  WoodBg,
  PersonCard,
  CardTitle,
  WoodBgTitle,
  StoreBg,
  CardsWrapper,
  Card,
  InfoCardTitle,
  InfoCardText,
} from './HowItStarted.style';

import FloatingImage from '@components/pages/SmoothieFactory/OrangeLeaf/common/FloatingImage/FloatingImage';
import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';
const HowItStarted: FC = () => {
  const { width } = useWindowSize();

  const isMobile = width <= theme.breakpoints.tablet;

  return (
    <>
      <MaxWidthWrapper>
        <ContentWrapper>
          <FloatingOrangeShapeImage
            alt="orange shape"
            height="clamp(270px, 40.542vw, 613px)"
            src="/images/orange-and-shape.png"
            style={{ zIndex: -1 }}
            top="0"
            width="clamp(262px, 30.88vw, 467px)"
          />

          <Title color="#ED6C32" mb="clamp(16px,2.11vw, 24px)">
            How it started
          </Title>
          <Text>
            Smoothie Factory was founded by Olympic athlete James Villasana in 1996. As a high-level athlete, James
            needed healthy food options made with only the highest quality ingredients to fuel his body. His carefully
            crafted smoothies were created with nutrition, taste, and overall health in mind.
          </Text>
        </ContentWrapper>
      </MaxWidthWrapper>
      <WoodBg>
        {isMobile ? (
          <Image alt="wood bg" src="/images/wood-mobile-bg.png" fill />
        ) : (
          <Image alt="wood bg" src="/images/about-you-wood-bg.png" style={{ objectFit: 'cover' }} fill />
        )}
        <PersonCard>
          <FloatingImage
            alt="person"
            height="clamp(229px,28.04vw, 424px)"
            src="/images/Smoothie-Drinker.jpg"
            style={{ marginBottom: 'clamp(23px,2.91vw, 44px)' }}
            width="clamp(229px,27.97vw, 423px)"
          />
          <CardTitle>OUR MISSION</CardTitle>
        </PersonCard>
        <WoodBgTitle>
          Smoothie Factory exists to help health conscious people maintain their active lifestyle
        </WoodBgTitle>
        <FloatingImage
          alt="apple"
          bottom="-40%"
          height="clamp(129px,15.27vw, 231px )"
          right="-35%"
          src="/images/apple.png"
          width="clamp(132px,15.60vw, 236px)"
        />
      </WoodBg>
      <StoreBg>
        <Image alt="store bg" src="/images/store.jpg" style={{ objectFit: 'cover' }} fill />
      </StoreBg>
      <MaxWidthWrapper>
        <Title color="#23AA5D" mb="clamp(32px, 3.70vw, 56px)" style={{ textAlign: 'center' }}>
          We are here for you
        </Title>
        <CardsWrapper>
          <Card>
            <FloatingImage
              alt="card image"
              height="clamp(90px, 7.93vw, 120px)"
              src="/images/stars.svg"
              width="clamp(90px, 7.93vw, 120px)"
            />
            <InfoCardTitle>Outstanding space design!</InfoCardTitle>
            <InfoCardText>
              Experience our vibrant, modern space design while you enjoy your fresh and healthy Smoothie Factory
              favorites!
            </InfoCardText>
          </Card>
          <Card>
            <FloatingImage
              alt="card image"
              height="clamp(90px, 7.93vw, 120px)"
              src="/images/avocado-icon.svg"
              width="clamp(90px, 7.93vw, 120px)"
            />
            <InfoCardTitle>Only the highest quality for you</InfoCardTitle>
            <InfoCardText>
              Our smoothies and bites are always made with the freshest ingredients, ensuring you get the best quality
              and taste every time!
            </InfoCardText>
          </Card>
          <Card>
            <FloatingImage
              alt="card image"
              height="clamp(90px, 7.93vw, 120px)"
              src="/images/orange-icon.svg"
              width="clamp(90px, 7.93vw, 120px)"
            />
            <InfoCardTitle>The team that always smiles!</InfoCardTitle>
            <InfoCardText>
              Our friendly team is here to serve you with a smile and make your Smoothie Factory experience a memorable
              one!
            </InfoCardText>
          </Card>
        </CardsWrapper>
      </MaxWidthWrapper>
    </>
  );
};

export default HowItStarted;
