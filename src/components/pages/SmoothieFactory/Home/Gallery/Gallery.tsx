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

import type { FC } from 'react';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

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
];

const sliderDefaultInterval = 10000;

const Gallery: FC<{ mb: string }> = ({ mb }) => {
  const [activeSliderIndex, setActiveSliderIndex] = useState(0);
  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);

  const changeSlide = useCallback((goBackwards: boolean) => {
    setActiveSliderIndex((currentIndex) => {
      if (goBackwards) {
        if (currentIndex === 0) {
          return sliders.length - 1;
        }
        return currentIndex - 1;
      }

      if (currentIndex === sliders.length - 1) {
        return 0;
      }
      return currentIndex + 1;
    });
  }, []);

  const startSliderInterval = useCallback(() => {
    intervalReference.current = setInterval(() => {
      changeSlide(false);
      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }
      startSliderInterval();
    }, sliderDefaultInterval);
  }, [changeSlide]);

  useEffect(() => {
    startSliderInterval();

    return () => {
      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }
    };
  }, [startSliderInterval]);

  const onClick = (goBackwards: boolean): void => {
    if (intervalReference.current) {
      clearInterval(intervalReference.current);
    }
    startSliderInterval();
    changeSlide(goBackwards);
  };

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
            <GalleryImage>
              <Image src={sliders[0].img.src} alt="TODO:alt" fill style={{ objectFit: 'cover' }} />
            </GalleryImage>
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
              <Indicator active={false} />
              <Indicator active={false} />
              <Indicator active={false} />
              <Indicator active />
            </Indicators>
          </RightContainer>
        </FlexWrapper>
      </StyledMaxWidthWrapper>
    </BorderContainer>
  );
};

export default Gallery;
