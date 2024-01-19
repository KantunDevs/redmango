import { FC, useRef } from 'react';
import { FlavorItem, FlavorText, AnimationWrapper, Slider, FlavorTextWhite } from './FlavorItem.style';
import { animate } from 'framer-motion';
import { INITIAL_IMG } from './Header';

const FlavorItemComponent: FC<{
  slide: { text: string; animationText: string; image: string; icon: string };
  setImage;
  setIcon;
}> = ({ slide, setImage, setIcon }) => {
  const ref = useRef(null);

  const onMouseEnter = () => {
    setImage(slide.image);
    setIcon(slide.icon);
    animate(ref.current, { opacity: 1 });
  };

  const onMouseLeave = () => {
    setImage(INITIAL_IMG);
    setIcon(null);
    animate(ref.current, { opacity: 0 });
  };

  return (
    <>
      <FlavorItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <FlavorText>{slide.text}</FlavorText>
        <AnimationWrapper initial={{ opacity: 0 }} ref={ref}>
          <Slider>
            <FlavorTextWhite>{slide.animationText}</FlavorTextWhite>
            <FlavorTextWhite>{slide.animationText}</FlavorTextWhite>
            <FlavorTextWhite>{slide.animationText}</FlavorTextWhite>
            <FlavorTextWhite>{slide.animationText}</FlavorTextWhite>
          </Slider>
          <Slider>
            <FlavorTextWhite aria-hidden="true">{slide.animationText}</FlavorTextWhite>
            <FlavorTextWhite aria-hidden="true">{slide.animationText}</FlavorTextWhite>
            <FlavorTextWhite aria-hidden="true">{slide.animationText}</FlavorTextWhite>
            <FlavorTextWhite aria-hidden="true">{slide.animationText}</FlavorTextWhite>
          </Slider>
        </AnimationWrapper>
      </FlavorItem>
    </>
  );
};

export default FlavorItemComponent;
