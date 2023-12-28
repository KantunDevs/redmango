'use client';

import {
  Title,
  FrozenYogurtContent,
  LeftColumn,
  RightColumn,
  Subtitle,
  ColumnTitle,
  ColumnText,
  Button,
} from './OurStars.style';

import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';

const OurStars: FC = () => (
  <>
    <MaxWidthWrapper>
      <Title>Our stars...</Title>
      <FrozenYogurtContent>
        <LeftColumn>
          <Subtitle>Frozen yogurt</Subtitle>
          <ColumnTitle>
            Award winning <br /> frozen yogurt:
          </ColumnTitle>
          <ColumnText>
            First to be certified by the Yogurt Association’s Live and Active Culture Seal. 100% all-natural and nonfat.
            Certified Gluten Free and Kosher.
          </ColumnText>
          <Button>See the menu</Button>
        </LeftColumn>
        <RightColumn>
          <FloatingImage
            alt="cup"
            src="/images/image 51.png"
            width="clamp(400px,44.11vw, 667px)"
            right="9%"
            bottom="32%"
            style={{ zIndex: 1 }}
            height="clamp(400px, 44.11vw, 667px)"
          />
          <Image
            alt="first-row-image"
            fill
            src="/images/Group 89.svg"
            style={{ objectFit: 'contain', objectPosition: 'right bottom' }}
          />
        </RightColumn>
      </FrozenYogurtContent>
    </MaxWidthWrapper>
  </>
);

export default OurStars;
