'use client';

import { Container, Content, Title, Flavors, StyledMaxWidthWrapper, Text, BG, WhiteBG } from './Header.style';

import { useState, type FC } from 'react';
import { Button } from '@styles/common';
import { HomepageHeaderSlice } from 'prismicio-types';
import FlavorItemComponent from './FlavorItem';
import { PrismicImage } from '@prismicio/react';
import { ImageFieldImage } from '@prismicio/client';
import Link from 'next/link';

const Header: FC<{ slice: HomepageHeaderSlice }> = ({
  slice: {
    primary: { title, text, button, image: initialImage },
    items,
  },
}) => {
  const [image, setImage] = useState<ImageFieldImage | null | undefined>(initialImage);
  const [icon, setIcon] = useState<ImageFieldImage | null | undefined>(null);

  return (
    <>
      <Container>
        <StyledMaxWidthWrapper>
          <Content>
            <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
            <Text dangerouslySetInnerHTML={{ __html: text as string }}></Text>
            <Link href="/club-mango">
              <Button dangerouslySetInnerHTML={{ __html: button as string }}></Button>
            </Link>
          </Content>
          <Flavors>
            {items.map((slide, index) => (
              <FlavorItemComponent
                initialImage={initialImage}
                slide={slide}
                key={index}
                setImage={setImage}
                setIcon={setIcon}
              />
            ))}
          </Flavors>
        </StyledMaxWidthWrapper>
      </Container>
      <BG
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        {icon ? (
          <WhiteBG>
            <PrismicImage
              field={icon}
              width="155px"
              height="155px"
              style={{
                objectFit: 'cover',
              }}
            />
          </WhiteBG>
        ) : null}
        <PrismicImage
          field={image}
          style={{
            objectFit: image?.url === initialImage.url ? 'cover' : 'contain',
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: '0px',
            objectPosition: 'center bottom',
          }}
        />
      </BG>
    </>
  );
};

export default Header;
