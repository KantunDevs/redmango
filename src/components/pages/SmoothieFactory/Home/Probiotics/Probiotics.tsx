'use client';

import { BgImage, Card, CardTitle, CardText } from './Probiotics.style';

import type { FC } from 'react';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import useWindowSize from '@hooks/useWindowSize';
import theme from '@styles/theme';
import { Button } from '@styles/common';
import { HomepageProbioticsSlice } from 'prismicio-types';

const Probiotics: FC<{ slice: HomepageProbioticsSlice }> = ({
  slice: {
    primary: { title, text, button },
  },
}) => {
  const { width } = useWindowSize();
  const isMobile = width <= theme.breakpoints.mobile;

  return (
    <BgImage>
      <Image alt="bg image" fill src="/images/image 46.jpg" style={{ objectFit: 'cover' }} />
      <FloatingImage
        top="0%"
        right="0%"
        alt="pattern image"
        src="/images/Frame 106.png"
        width="clamp(264px, 31.15vw, 471px)"
        height="clamp(399px, 46.95vw, 710px)"
        style={{ zIndex: 2 }}
      />
      <Card>
        <CardTitle dangerouslySetInnerHTML={{ __html: title as string }}></CardTitle>
        <CardText dangerouslySetInnerHTML={{ __html: text as string }}></CardText>
        <Button dangerouslySetInnerHTML={{ __html: button as string }}></Button>
      </Card>
      {isMobile ? (
        <FloatingImage
          bottom="0%"
          left="0%"
          alt="pattern image"
          src="/images/Frame 108.png"
          width="100vw"
          height="34px"
        />
      ) : (
        <>
          <FloatingImage
            bottom="179%"
            left="-21%"
            alt="pattern image"
            src="/images/Frame 107.png"
            width="clamp(440px, 38.82vw, 587px)"
            height="clamp(46px, 4.10vw, 62px)"
          />
          <FloatingImage
            bottom="179%"
            right="21%"
            alt="pattern image"
            src="/images/Frame 107 (1).png"
            width="clamp(440px, 38.82vw, 587px)"
            height="clamp(46px, 4.10vw, 62px)"
          />
        </>
      )}
    </BgImage>
  );
};

export default Probiotics;
