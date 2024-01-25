'use client';

import { useMemo, type FC } from 'react';
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
import useWindowSize from '@hooks/useWindowSize';
import theme from '@styles/theme';
import { MenuItemsSlice } from 'prismicio-types';

const MenuItems: FC<{ slice: MenuItemsSlice }> = ({ slice }) => {
  console.log(slice);
  const { width } = useWindowSize();

  const isMobile = width <= theme.breakpoints.tablet;

  const rows = useMemo(
    () =>
      slice.items.map((item, index) => {
        switch (index % 4) {
          case 0:
          default:
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
                  <RedColumn variant={1}>
                    {isMobile ? (
                      <FloatingImage
                        top="-20%"
                        left="34%"
                        alt="icon"
                        width="125px"
                        src="/images/cupcake_mobile.svg"
                        height="125px"
                      />
                    ) : (
                      <FloatingImage
                        top="46%"
                        right="0%"
                        alt="icon"
                        width="clamp(165px, 13.22vw, 200px)"
                        src="/images/cupcake.svg"
                        height="clamp(274px, 22.02vw, 333px)"
                      />
                    )}
                  </RedColumn>
                  <ImageColumn variant={1}>
                    <FloatingImage
                      width="clamp(342px, 32.60vw, 493px)"
                      field={item.image}
                      height="clamp(342px, 32.60vw, 493px)"
                    />
                    <FloatingImage
                      right="34%"
                      style={{ zIndex: -1 }}
                      bottom={isMobile ? '40%' : '11%'}
                      alt="bg"
                      width="clamp(396px, 46.69vw, 706px)"
                      src="/images/Mask group (4).png"
                      height="clamp(384px, 45.23vw, 684px)"
                    />
                  </ImageColumn>
                </StyledMaxWidthWrapper>
              </ContentWrapper>
            );
          case 1:
          case 3:
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
                  <RedColumn variant={2}>
                    {isMobile ? (
                      <FloatingImage
                        bottom="20%"
                        right="-44%"
                        alt="icon"
                        width="101px"
                        src="/images/Group 124 (1).svg"
                        height="97px"
                      />
                    ) : (
                      <FloatingImage
                        right="25%"
                        bottom="-39%"
                        alt="icon"
                        height="clamp(171px, 15.60vw, 236px)"
                        src="/images/Group 124.svg"
                        width="clamp(177px, 13.35vw, 202px)"
                      />
                    )}
                  </RedColumn>
                  <ImageColumn variant={2}>
                    <FloatingImage
                      width="clamp(259px, 30.55vw, 462px)"
                      field={item.image}
                      height="clamp(206px, 24.33vw, 368px)"
                    />
                    <FloatingImage
                      right={isMobile ? '85%' : '8%'}
                      style={{ zIndex: -1 }}
                      bottom={isMobile ? '70%' : '7%'}
                      alt="bg"
                      width="clamp(396px, 46.69vw, 706px)"
                      src="/images/Mask group (5).png"
                      height="clamp(384px, 45.23vw, 684px)"
                    />
                  </ImageColumn>
                </StyledMaxWidthWrapper>
              </ContentWrapper>
            );
          case 2:
            return (
              <ContentWrapper key={index}>
                <StyledMaxWidthWrapper>
                  <ContentColumn variant={3}>
                    <Subtitle dangerouslySetInnerHTML={{ __html: item.subtitle as string }}></Subtitle>
                    <Title dangerouslySetInnerHTML={{ __html: item.title as string }}></Title>
                    <Text dangerouslySetInnerHTML={{ __html: item.text as string }}></Text>
                    <ButtonContainer>
                      <Button dangerouslySetInnerHTML={{ __html: item.button_1 as string }}></Button>
                      <ButtonOutlined dangerouslySetInnerHTML={{ __html: item.button_2 as string }}></ButtonOutlined>
                    </ButtonContainer>
                  </ContentColumn>
                  <RedColumn variant={3}>
                    {isMobile ? (
                      <FloatingImage
                        bottom="34%"
                        left="31%"
                        alt="icon"
                        width="101px"
                        src="/images/Icon (6).svg"
                        height="97px"
                      />
                    ) : (
                      <FloatingImage
                        top="28%"
                        right="19%"
                        alt="icon"
                        height="clamp(249px, 22.02vw, 333px)"
                        src="/images/Icon (6).svg"
                        width="clamp(249px, 22.02vw, 333px)"
                      />
                    )}
                  </RedColumn>
                  <ImageColumn variant={3}>
                    <FloatingImage
                      width="clamp(326px, 38.42vw, 581px)"
                      field={item.image}
                      height="clamp(169px,19.90vw, 301px)"
                    />
                  </ImageColumn>
                </StyledMaxWidthWrapper>
              </ContentWrapper>
            );
        }
      }),
    [isMobile, slice],
  );

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

      {rows}
    </Wrapper>
  );
};

export default MenuItems;
