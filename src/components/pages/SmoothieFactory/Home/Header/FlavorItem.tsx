import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { FlavorItem, FlavorText, AnimationWrapper, Slider, FlavorTextWhite } from './FlavorItem.style';
import { animate } from 'framer-motion';
import { HomepageHeaderSliceDefaultItem, Simplify } from 'prismicio-types';
import { ImageFieldImage } from '@prismicio/client';

const FlavorItemComponent: FC<{
  slide: Simplify<HomepageHeaderSliceDefaultItem>;
  setImage: Dispatch<SetStateAction<ImageFieldImage | null | undefined>>;
  setIcon: Dispatch<SetStateAction<ImageFieldImage | null | undefined>>;
  initialImage: ImageFieldImage | null | undefined;
}> = ({ slide, setImage, setIcon, initialImage }) => {
  const ref = useRef(null);

  const onMouseEnter = () => {
    setImage(slide.image);
    setIcon(slide.icon);
    animate(ref.current, { opacity: 1 });
  };

  const onMouseLeave = () => {
    setImage(initialImage);
    setIcon(null);
    animate(ref.current, { opacity: 0 });
  };

  return (
    <>
      <FlavorItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <FlavorText>{slide.text}</FlavorText>
        <AnimationWrapper initial={{ opacity: 0 }} ref={ref}>
          <Slider>
            <FlavorTextWhite>{slide.animated_text}</FlavorTextWhite>
            <FlavorTextWhite>{slide.animated_text}</FlavorTextWhite>
            <FlavorTextWhite>{slide.animated_text}</FlavorTextWhite>
            <FlavorTextWhite>{slide.animated_text}</FlavorTextWhite>
          </Slider>
          <Slider>
            <FlavorTextWhite aria-hidden="true">{slide.animated_text}</FlavorTextWhite>
            <FlavorTextWhite aria-hidden="true">{slide.animated_text}</FlavorTextWhite>
            <FlavorTextWhite aria-hidden="true">{slide.animated_text}</FlavorTextWhite>
            <FlavorTextWhite aria-hidden="true">{slide.animated_text}</FlavorTextWhite>
          </Slider>
        </AnimationWrapper>
      </FlavorItem>
    </>
  );
};

export default FlavorItemComponent;
