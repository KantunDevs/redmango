'use client';

import {
  Background,
  LeftSection,
  RightSection,
  LeftSectionTitle,
  LeftSectionText,
  ButtonWhite,
  RightSectionText,
  RightSectionTitle,
  ButtonRed,
  Wrapper,
} from './JoinOurClub.style';

import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import LetsConnect from '../LetsConnect/LetsConnect';

import type { FC } from 'react';
import { HomepageJoinOurClubSlice, HomepageLetsConnectSlice } from 'prismicio-types';

const JoinOurClub: FC<{ slice: HomepageJoinOurClubSlice; letsConnectSlice: HomepageLetsConnectSlice }> = ({
  slice: {
    primary: { title, subtitle, button, gift_cards_button },
  },
  letsConnectSlice,
}) => (
  <Wrapper>
    <Image fill alt="bg" src="/images/image 45.jpg" style={{ objectFit: 'contain', objectPosition: '0 100px' }} />
    <Image
      fill
      alt="bg"
      src="/images/image 45.jpg"
      style={{ position: 'absolute', objectFit: 'contain', objectPosition: 'bottom' }}
    />
    <FloatingImage
      width="clamp(701px, 61.83vw, 935px)"
      height="clamp(691px, 60.97vw, 922px)"
      alt="bg"
      src="/images/Group 90.svg"
      bottom="19%"
      left="0%"
      style={{
        zIndex: 1,
        left: 'initial',
      }}
    />

    <Background>
      <LeftSection>
        <FloatingImage
          top="-40%"
          left="-17%"
          alt="bg"
          src="/images/Vector (2).svg"
          width="clamp(207px,18.25vw, 276px)"
          height="clamp(201px,17.79vw, 269px)"
        />
        <Image alt="letter icon" src="/images/Group 17.svg" width="68" height="60" />
        <LeftSectionTitle dangerouslySetInnerHTML={{ __html: title as string }}></LeftSectionTitle>
        <LeftSectionText dangerouslySetInnerHTML={{ __html: subtitle as string }}></LeftSectionText>
        <ButtonWhite dangerouslySetInnerHTML={{ __html: button as string }}></ButtonWhite>
        <FloatingImage
          bottom="18%"
          hideUnder={1024}
          right="13%"
          alt="bg"
          src="/images/Vector (3).svg"
          width="398px"
          height="386px"
        />
      </LeftSection>
      <RightSection>
        <RightSectionText>...or get a</RightSectionText>
        <RightSectionTitle>Gift card</RightSectionTitle>
        <FloatingImage
          style={{ transform: 'translateX(-13px)' }}
          alt="gift card"
          src="/images/Group 29.png"
          width="clamp(301px,22.28vw, 337px)"
          height="clamp(171px,12.69vw, 192px)"
        />
        <RightSectionText style={{ color: '#4E3629' }}>... for that special person!</RightSectionText>
        <ButtonRed dangerouslySetInnerHTML={{ __html: gift_cards_button as string }}></ButtonRed>
      </RightSection>
    </Background>
    <LetsConnect slice={letsConnectSlice} />
  </Wrapper>
);

export default JoinOurClub;
