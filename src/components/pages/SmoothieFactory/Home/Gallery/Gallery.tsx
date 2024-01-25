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
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { AnimatePresence } from 'framer-motion';
import { GallerySlice } from 'prismicio-types';
import { PrismicNextImage } from '@prismicio/next';

type Slider = {
  img: {
    src: string;
  };
  text: string;
  title: string;
};

const sliderDefaultInterval = 4000;
const sliderAfterClickInterval = 10000;

const Gallery: FC<{ mb: string; slice: GallerySlice }> = ({ mb, slice: { items } }) => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);

  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);

  const changeSlide = useCallback(() => {
    setActiveSliderIndex((currentIndex) => {
      if (currentIndex === items.length - 1) {
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
                <PrismicNextImage field={items[activeSliderIndex].image} fill style={{ objectFit: 'cover' }} />
              </GalleryImage>
            </AnimatePresence>
          </LeftContainer>
          <RightContainer>
            <ContentContainer>
              <Subtitle dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].subtitle as string }}></Subtitle>
              <GalleryTitle
                dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].title as string }}
              ></GalleryTitle>
              <GalleryText dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].text as string }}></GalleryText>
              <Button dangerouslySetInnerHTML={{ __html: items[activeSliderIndex].button as string }}></Button>
            </ContentContainer>
            <Indicators>
              {items.map((_slider, index) => (
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
