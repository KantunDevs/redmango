'use client';

import { BgImage, Card, CardTitle, CardText, Circle } from './Probiotics.style';

import type { FC } from 'react';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { Button } from '@styles/common';
import { HomepageProbioticsSlice } from 'prismicio-types';

const Probiotics: FC<{ slice: HomepageProbioticsSlice }> = ({
  slice: {
    primary: { title, text, button },
  },
}) => {
  return (
    <BgImage>
      <Image alt="bg image" fill src="/images/image 46.jpg" style={{ objectFit: 'cover' }} />
      <Card>
        <Circle>
          <FloatingImage
            alt="pattern image"
            src="/images/Icon (14).svg"
            width="clamp(67px, 5.95vw, 90px)"
            height="clamp(67px, 5.95vw, 90px)"
            style={{ zIndex: 2 }}
          />
        </Circle>
        <CardTitle dangerouslySetInnerHTML={{ __html: title as string }}></CardTitle>
        <CardText dangerouslySetInnerHTML={{ __html: text as string }}></CardText>
        <Button dangerouslySetInnerHTML={{ __html: button as string }}></Button>
      </Card>
    </BgImage>
  );
};

export default Probiotics;
