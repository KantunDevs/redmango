'use client';

import { Wrapper, Content, SideImage, Title, Text, HeaderMaxWidthWrapper } from './Header.style';

import type { FC } from 'react';
import Image from 'next/image';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { AboutUsHeaderSlice } from 'prismicio-types';

const Header: FC<{ slice: AboutUsHeaderSlice }> = ({
  slice: {
    primary: { title, text },
  },
}) => (
  <HeaderMaxWidthWrapper>
    <Wrapper>
      <Content>
        <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
        <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
      </Content>
      <SideImage>
        <Image
          alt="about us side image"
          src="/images/image 51 (4).jpg"
          style={{
            objectFit: 'cover',
          }}
          fill
        />
      </SideImage>
      <FloatingImage
        alt="logo"
        style={{ position: 'absolute', left: '50%', bottom: '0', transform: 'translateX(-50%) translateY(50%)' }}
        width="clamp(100px,11.77vw, 178px)"
        height="clamp(98px,11.57vw, 175px)"
        src="/images/Group 116.svg"
      />
    </Wrapper>
  </HeaderMaxWidthWrapper>
);

export default Header;
