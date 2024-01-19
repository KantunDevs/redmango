'use client';

import {
  BorderContainer,
  LeftContainer,
  LemonsColumn,
  GalleryImage,
  FlexWrapper,
  ContentContainer,
  Subtitle,
  GalleryTitle,
  GalleryText,
  Indicators,
  Button,
  Indicator,
  RightContainer,
  StyledMaxWidthWrapper,
} from './Gallery.style';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { FC, MouseEventHandler } from 'react';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { AnimatePresence } from 'framer-motion';

type Slider = {
  img: {
    src: string;
  };
  text: string;
  title: string;
};

const sliders = [
  {
    img: {
      src: '/images/Rectangle 106.jpg',
    },
    text: '100% real fruit and vegetables with unique blends of delicious, beneficial ingredients blending nutrition with great taste.',
    title: 'SMOOTHIES:',
  },
  {
    img: {
      src: '/images/Rectangle 106 (5).jpg',
    },
    text: '100% real fruit and vegetables with unique blends of delicious, beneficial ingredients blending nutrition with great taste.',
    title: 'SMOOTHIES:',
  },
];

const sliderDefaultInterval = 4000;
const sliderAfterClickInterval = 10000;

const Gallery: FC<{ mb: string }> = ({ mb }) => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);

  const changeSlide = useCallback(() => {
    setActiveSliderIndex((currentIndex) => {
      if (currentIndex === sliders.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  }, []);

  const startSliderInterval = useCallback(
    (timeout = sliderDefaultInterval) => {
      intervalReference.current = setInterval(() => {
        changeSlide();
        if (timeout === sliderAfterClickInterval) {
          if (intervalReference.current) {
            clearInterval(intervalReference.current);
          }
          startSliderInterval(sliderDefaultInterval);
        }
      }, timeout);
    },
    [changeSlide],
  );

  const handleSliderButtonClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      const { target } = event;
      const { id } = target as Element;

      if (id !== activeSliderIndex.toString()) {
        setActiveSliderIndex(Number(id));
      }

      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }

      startSliderInterval(sliderAfterClickInterval);
    },
    [activeSliderIndex, startSliderInterval],
  );

  useEffect(() => {
    startSliderInterval();

    return () => {
      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }
    };
  }, [startSliderInterval]);

  return (
    <BorderContainer mb={mb}>
      <StyledMaxWidthWrapper>
        <FlexWrapper>
          <LeftContainer>
            <LemonsColumn>
              <FloatingImage
                alt="lemon"
                src="/images/taste.svg"
                width="clamp(48px,5.22vw, 79px)"
                height="clamp(48px,5.22vw, 79px)"
              />
              <FloatingImage
                alt="lemon"
                src="/images/taste.svg"
                width="clamp(48px,5.22vw, 79px)"
                height="clamp(48px,5.22vw, 79px)"
              />
              <FloatingImage
                alt="lemon"
                src="/images/taste.svg"
                width="clamp(48px,5.22vw, 79px)"
                height="clamp(48px,5.22vw, 79px)"
              />
              <FloatingImage
                alt="lemon"
                src="/images/taste.svg"
                width="clamp(48px,5.22vw, 79px)"
                height="clamp(48px,5.22vw, 79px)"
              />
              <FloatingImage
                alt="lemon"
                src="/images/taste.svg"
                width="clamp(48px,5.22vw, 79px)"
                height="clamp(48px,5.22vw, 79px)"
              />
              <FloatingImage
                alt="lemon"
                src="/images/taste.svg"
                width="clamp(48px,5.22vw, 79px)"
                height="clamp(48px,5.22vw, 79px)"
              />
            </LemonsColumn>
            <AnimatePresence initial={false}>
              <GalleryImage
                key={activeSliderIndex}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              >
                <Image src={sliders[activeSliderIndex].img.src} alt="TODO:alt" fill style={{ objectFit: 'cover' }} />
              </GalleryImage>
            </AnimatePresence>
          </LeftContainer>
          <RightContainer>
            <ContentContainer>
              <Subtitle>NEW STAR IN TOWN</Subtitle>
              <GalleryTitle>Yogurt</GalleryTitle>
              <GalleryText>
                Our froyo flavors are the best, because we make them that way. No really, we do. Each flavor recipe is
                uniquely ours and you can’t get it anywhere else!
              </GalleryText>
              <Button>See the menu</Button>
            </ContentContainer>
            <Indicators>
              {sliders.map((_slider, index) => (
                <Indicator
                  key={index}
                  id={index.toString()}
                  active={index === activeSliderIndex}
                  onClick={handleSliderButtonClick}
                />
              ))}
            </Indicators>
          </RightContainer>
        </FlexWrapper>
      </StyledMaxWidthWrapper>
    </BorderContainer>
  );
};

export default Gallery;
