'use client';

import { type FC } from 'react';
import {
  ContentWrapper,
  ContentColumn,
  StyledMaxWidthWrapper,
  RedColumn,
  ImageColumn,
  Subtitle,
  Title,
  Text,
  ButtonContainer,
  Wrapper,
} from './MenuItem.style';
import { Button } from '../../Home/Gallery/Gallery.style';
import { ButtonOutlined } from '../../OrangeLeaf/common/ButtonOutlined/ButtonOutlined';
import FloatingImage from '../../OrangeLeaf/common/FloatingImage/FloatingImage';
import { MenuItemsSlice } from 'prismicio-types';

const MenuItems: FC<{ slice: MenuItemsSlice }> = ({ slice }) => {
  return (
    <Wrapper>
      <FloatingImage
        alt="logo"
        style={{
          position: 'absolute',
          left: '50%',
          zIndex: 2,
          transform: 'translate(-50%, calc(-1 * clamp(79px,11.50vw, 174px)))',
        }}
        width="clamp(115px,18.12vw, 274px)"
        src="/images/Group 121.svg"
        height="clamp(115px,18.12vw, 274px)"
      />

      {slice.items.map((item, index) => {
        switch (index % 2) {
          case 0:
            return (
              <ContentWrapper key={index}>
                <StyledMaxWidthWrapper>
                  <ContentColumn variant={1}>
                    <Subtitle dangerouslySetInnerHTML={{ __html: item.subtitle as string }}></Subtitle>
                    <Title dangerouslySetInnerHTML={{ __html: item.title as string }}></Title>
                    <Text dangerouslySetInnerHTML={{ __html: item.text as string }}></Text>
                    <ButtonContainer>
                      <Button dangerouslySetInnerHTML={{ __html: item.button_1 as string }}></Button>
                      <ButtonOutlined dangerouslySetInnerHTML={{ __html: item.button_2 as string }}></ButtonOutlined>
                    </ButtonContainer>
                  </ContentColumn>
                  <RedColumn variant={1}></RedColumn>
                  <ImageColumn variant={1}>
                    <FloatingImage
                      width="clamp(342px, 32.60vw, 493px)"
                      field={item.image}
                      height="clamp(342px, 32.60vw, 493px)"
                    />
                  </ImageColumn>
                </StyledMaxWidthWrapper>
              </ContentWrapper>
            );
          default:
            return (
              <ContentWrapper key={index}>
                <StyledMaxWidthWrapper>
                  <ContentColumn variant={2}>
                    <Subtitle dangerouslySetInnerHTML={{ __html: item.subtitle as string }}></Subtitle>
                    <Title dangerouslySetInnerHTML={{ __html: item.title as string }}></Title>
                    <Text dangerouslySetInnerHTML={{ __html: item.text as string }}></Text>
                    <ButtonContainer>
                      <Button dangerouslySetInnerHTML={{ __html: item.button_1 as string }}></Button>
                      <ButtonOutlined dangerouslySetInnerHTML={{ __html: item.button_2 as string }}></ButtonOutlined>
                    </ButtonContainer>
                  </ContentColumn>
                  <RedColumn variant={2}></RedColumn>
                  <ImageColumn variant={2}>
                    <FloatingImage
                      width="clamp(259px, 30.55vw, 462px)"
                      field={item.image}
                      height="clamp(206px, 24.33vw, 368px)"
                    />
                  </ImageColumn>
                </StyledMaxWidthWrapper>
              </ContentWrapper>
            );
        }
      })}
    </Wrapper>
  );
};

export default MenuItems;
