import { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';

import theme from '@styles/theme';
import useWindowSize from '@hooks/useWindowSize';

import {
  CircularImage,
  Container,
  CopyrightContainer,
  CopyrightTitle,
  SliderAbsoluteContentWrapper,
  SliderButton,
  SliderButtonsContainer,
  SliderContainer,
  SliderFirstImageWrapper,
  SliderImageContainer,
  SliderImageContent,
  SliderImageContentMainText,
  SliderImageContentTitle,
  SliderImageContentTitleContainer,
  SliderImageRelativeContainer,
} from './MenuSection.styles';

import type { FC, MouseEventHandler } from 'react';
import { FranchisingMenuSectionSlice } from 'prismicio-types';
import { PrismicImage } from '@prismicio/react';

type SliderInfo = {
  imageAlt: string;
  imagePath: string;
  menuTitle: string;
  sliderText: string;
};

const sliderDefaultInterval = 4000;
const sliderAfterClickInterval = 10000;

const MenuSection: FC<{ slice: FranchisingMenuSectionSlice }> = ({
  slice: {
    primary: { title },
    items,
  },
}) => {
  const { width } = useWindowSize();
  const intervalReference = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeSliderTitle, setActiveSliderTitle] = useState(items[0].title);

  const isDesktop = useMemo(() => (width ? width >= theme.breakpoints.desktop : false), [width]);

  const changeSlide = useCallback(() => {
    setActiveSliderTitle((previousValue) => {
      if (previousValue === items[items.length - 1].title) {
        return items[0].title;
      }

      const previousValueIndex = items.findIndex((sliderInfo) => sliderInfo.title === previousValue);

      return items[previousValueIndex + 1].title;
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

  const handleSliderButtonClick = useCallback(
    (event: MouseEvent) => {
      const { target } = event;
      const { id } = target as Element;

      if (id !== activeSliderTitle) {
        setActiveSliderTitle(id);
      }

      if (intervalReference.current) {
        clearInterval(intervalReference.current);
      }

      startSliderInterval(sliderAfterClickInterval);
    },
    [activeSliderTitle, startSliderInterval],
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
    <Container>
      <CopyrightContainer>
        <CopyrightTitle dangerouslySetInnerHTML={{ __html: title as string }}></CopyrightTitle>
      </CopyrightContainer>

      <SliderContainer>
        <SliderImageContainer>
          {items.map((item, index) => {
            if (index === 0) {
              return (
                <SliderFirstImageWrapper key={item.title} isActive={item.title === activeSliderTitle}>
                  {isDesktop ? null : (
                    <SliderImageContent>
                      <SliderImageContentTitleContainer>
                        <SliderImageContentTitle>{item.title}</SliderImageContentTitle>
                      </SliderImageContentTitleContainer>

                      <SliderImageContentMainText>{item.text}</SliderImageContentMainText>
                    </SliderImageContent>
                  )}
                  <SliderImageRelativeContainer>
                    <PrismicImage
                      height={654}
                      sizes="100vw"
                      field={item.image}
                      style={{
                        height: 'auto',
                        width: '100%',
                      }}
                      width={1512}
                    />
                  </SliderImageRelativeContainer>

                  {isDesktop ? (
                    <SliderImageContent>
                      <SliderImageContentTitleContainer>
                        <SliderImageContentTitle>{item.title}</SliderImageContentTitle>
                      </SliderImageContentTitleContainer>

                      <SliderImageContentMainText>{item.text}</SliderImageContentMainText>
                    </SliderImageContent>
                  ) : null}
                </SliderFirstImageWrapper>
              );
            }

            return (
              <SliderAbsoluteContentWrapper key={item.title} isActive={item.title === activeSliderTitle}>
                {isDesktop ? null : (
                  <SliderImageContent>
                    <SliderImageContentTitleContainer>
                      <SliderImageContentTitle>{item.title}</SliderImageContentTitle>
                    </SliderImageContentTitleContainer>

                    <SliderImageContentMainText>{item.text}</SliderImageContentMainText>
                  </SliderImageContent>
                )}

                <SliderImageRelativeContainer>
                  <PrismicImage
                    height={654}
                    sizes="100vw"
                    field={item.image}
                    style={{
                      height: 'auto',
                      width: '100%',
                    }}
                    width={1512}
                  />
                </SliderImageRelativeContainer>

                {isDesktop ? (
                  <SliderImageContent>
                    <SliderImageContentTitleContainer>
                      <SliderImageContentTitle>{item.title}</SliderImageContentTitle>
                    </SliderImageContentTitleContainer>

                    <SliderImageContentMainText>{item.text}</SliderImageContentMainText>
                  </SliderImageContent>
                ) : null}
              </SliderAbsoluteContentWrapper>
            );
          })}
        </SliderImageContainer>
        <SliderButtonsContainer>
          {items.map(({ title }, index) => (
            <SliderButton
              key={index}
              id={title as string}
              isActive={title === activeSliderTitle}
              onClick={handleSliderButtonClick as MouseEventHandler<HTMLButtonElement> & (() => void)}
            />
          ))}
        </SliderButtonsContainer>
      </SliderContainer>

      <CircularImage alt="main-content-image" src="/images/MenuSectionCircular.png" />
    </Container>
  );
};

export default MenuSection;
