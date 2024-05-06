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
import { HomepageOurStarsSlice } from 'prismicio-types';
import { asLink } from '@prismicio/client';

const OurStars: FC<{ slice: HomepageOurStarsSlice }> = ({
  slice: {
    primary: { main_title, title, text, button, subtitle, image, is_menu_page_variant, asset },
  },
}) => (
  <>
    <MaxWidthWrapper>
      <Title dangerouslySetInnerHTML={{ __html: main_title as string }}></Title>
      <FrozenYogurtContent>
        <LeftColumn>
          {is_menu_page_variant ? null : <Subtitle dangerouslySetInnerHTML={{ __html: title as string }}></Subtitle>}
          <ColumnTitle dangerouslySetInnerHTML={{ __html: subtitle as string }}></ColumnTitle>
          <ColumnText dangerouslySetInnerHTML={{ __html: text as string }}></ColumnText>
          {is_menu_page_variant ? null : (
            <a href={asLink(asset) as string} target="_blank">
              <Button dangerouslySetInnerHTML={{ __html: button as string }}></Button>
            </a>
          )}
        </LeftColumn>
        <RightColumn>
          <FloatingImage
            field={image}
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
