'use client';

import { MaxWidthWrapper } from '@styles/common';

import { Cards, Card, GiftCardArea, GiftCard, GiftCardText, Button } from './ChooseDesigns.style';

import { CtaButton } from '../../Home/WhatIsNew/WhatIsNew.style';

import type { FC } from 'react';
import Image from 'next/image';

import { Title } from '../../Home/common';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { ChooseDesignsSlice } from 'prismicio-types';

const ChooseDesigns: FC<{ slice: ChooseDesignsSlice }> = ({
  slice: {
    primary: { text, title, button, title_2, button_2 },
  },
}) => (
  <>
    <MaxWidthWrapper style={{ position: 'relative', marginBottom: '85px' }}>
      <FloatingImage
        style={{ zIndex: -1 }}
        alt="bg"
        top="-41%"
        left="-22%"
        src="/images/Group 153.svg"
        height="716px"
        width="739px"
        hideUnder={650}
      />
      <Title color="#421B00" mb="20px" dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <Button dangerouslySetInnerHTML={{ __html: button as string }}></Button>
    </MaxWidthWrapper>
    <Cards>
      <Card>
        <Image alt="gift card" src="/images/card (4).png" style={{ objectFit: 'cover' }} fill />
      </Card>
      <Card>
        <Image alt="gift card" src="/images/card (5).png" style={{ objectFit: 'cover' }} fill />
      </Card>
      <Card>
        <Image alt="gift card" src="/images/card (6).png" style={{ objectFit: 'cover' }} fill />
      </Card>
    </Cards>
    <GiftCardArea>
      <FloatingImage
        alt="shape"
        left="-59%"
        top="-42%"
        src="/images/Shapes.svg"
        height="clamp(672px, 60.11vw, 909px)"
        width="clamp(680px, 60.78vw, 919px)"
        style={{ zIndex: 1 }}
      />
      <Image alt="gift card" src="/images/image 94.jpg" style={{ objectFit: 'cover' }} fill />
      <GiftCard>
        <FloatingImage
          alt="logo"
          style={{ position: 'absolute', top: '0', transform: 'translateY(-60%)' }}
          src="/images/Group 144.png"
          height="clamp(120px, 11.17vw,169px)"
          width="clamp(120px,11.17vw, 169px)"
        />
        <Title
          style={{ textAlign: 'center' }}
          color="#cb333b"
          mb="28px"
          dangerouslySetInnerHTML={{ __html: title_2 as string }}
        ></Title>
        <GiftCardText dangerouslySetInnerHTML={{ __html: text as string }}></GiftCardText>
        <CtaButton dangerouslySetInnerHTML={{ __html: button_2 as string }}></CtaButton>
      </GiftCard>
    </GiftCardArea>
  </>
);

export default ChooseDesigns;
