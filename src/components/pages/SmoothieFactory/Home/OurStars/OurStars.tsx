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
  IconsWrapper,
} from './OurStars.style';

import { MaxWidthWrapper } from '@styles/common';

import type { FC } from 'react';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { HomepageOurStarsSlice } from 'prismicio-types';

const OurStars: FC<{ slice: HomepageOurStarsSlice }> = ({
  slice: {
    primary: { main_title, title, text, button, subtitle, image, is_menu_page_variant },
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
          {is_menu_page_variant ? (
            <IconsWrapper>
              <FloatingImage
                alt="icon"
                height="clamp(46px,4.10vw, 62px)"
                width="clamp(46px,4.10vw, 62px)"
                src="/images/Icon (10).svg"
              />
              <FloatingImage
                alt="icon"
                height="clamp(46px,4.10vw, 62px)"
                width="clamp(46px,4.10vw, 62px)"
                src="/images/Icon (11).svg"
              />
              <FloatingImage
                alt="icon"
                height="clamp(46px,4.10vw, 62px)"
                width="clamp(46px,4.10vw, 62px)"
                src="/images/Icon (12).svg"
              />
              <FloatingImage
                alt="icon"
                height="clamp(46px,4.10vw, 62px)"
                width="clamp(46px,4.10vw, 62px)"
                src="/images/Icon (13).svg"
              />
            </IconsWrapper>
          ) : (
            <Button dangerouslySetInnerHTML={{ __html: button as string }}></Button>
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
