'use client';

import type { FC } from 'react';
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

const MenuItems: FC = () => {
  const { width } = useWindowSize();

  const isMobile = width <= theme.breakpoints.tablet;

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
      <ContentWrapper>
        <StyledMaxWidthWrapper>
          <ContentColumn variant={1}>
            <Subtitle>FROZEN YOGURT</Subtitle>
            <Title>Award winning frozen yogurt:</Title>
            <Text>
              First to be certified by the Yogurt Association’s Live and Active Culture Seal. 100% all-natural and
              nonfat. Certified Gluten Free and Kosher.
            </Text>
            <ButtonContainer>
              <Button>see the menu</Button>
              <ButtonOutlined>see the menu</ButtonOutlined>
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
              alt="image"
              width="clamp(342px, 32.60vw, 493px)"
              src="/images/image 51 (1).png"
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
      <ContentWrapper>
        <StyledMaxWidthWrapper>
          <ContentColumn variant={2}>
            <Subtitle>Wellness bowls</Subtitle>
            <Title>Bowl of happiness</Title>
            <Text>
              A great source of antioxidants, vitamins, minerals and fiber, and garnished with a variety of colorful and
              tasty toppings. It’s full of superfoods, and 100% vegan.
            </Text>
            <ButtonContainer>
              <Button>see the menu</Button>
              <ButtonOutlined>see the menu</ButtonOutlined>
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
              alt="image"
              width="clamp(259px, 30.55vw, 462px)"
              src="/images/GreenerColada.png"
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
      <ContentWrapper>
        <StyledMaxWidthWrapper>
          <ContentColumn variant={3}>
            <Subtitle>sandwiches</Subtitle>
            <Title>Signature Sandwiches:</Title>
            <Text>
              Our flatbread and line of Gourmet PB&J sandwiches are an excellent combination of texture and flavors from
              around the world.
            </Text>
            <ButtonContainer>
              <Button>see the menu</Button>
              <ButtonOutlined>see the menu</ButtonOutlined>
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
              alt="image"
              width="clamp(326px, 38.42vw, 581px)"
              src="/images/image 32.png"
              height="clamp(169px,19.90vw, 301px)"
            />
          </ImageColumn>
        </StyledMaxWidthWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <StyledMaxWidthWrapper>
          <ContentColumn variant={2}>
            <Subtitle>Smoothies</Subtitle>
            <Title>Superior Smoothies:</Title>
            <Text>No syrups, no concentrates, no purees, from the menu or customizable.</Text>
            <ButtonContainer>
              <Button>see the menu</Button>
              <ButtonOutlined>see the menu</ButtonOutlined>
            </ButtonContainer>
          </ContentColumn>
          <RedColumn variant={2}>
            {isMobile ? (
              <FloatingImage
                top="-4%"
                right="-44%"
                alt="icon"
                width="124px"
                src="/images/Icon (7).svg"
                height="124px"
              />
            ) : (
              <FloatingImage
                top="28%"
                right="19%"
                alt="icon"
                height="clamp(249px, 22.02vw, 333px)"
                src="/images/Icon (7).svg"
                width="clamp(249px, 22.02vw, 333px)"
              />
            )}
          </RedColumn>
          <ImageColumn variant={2}>
            <FloatingImage
              top={isMobile ? '-10%' : '-6%'}
              left={isMobile ? '-84%' : '-71%'}
              alt="bg"
              width="clamp(688px, 60.78vw, 919px)"
              src="/images/Shapes.svg"
              height="clamp(681px, 60.11vw, 909px)"
            />
            <FloatingImage
              alt="image"
              width="clamp(212px, 25.06vw, 379px)"
              src="/images/image 53 (1).png"
              height="clamp(269px,31.67vw, 479px)"
            />
          </ImageColumn>
        </StyledMaxWidthWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <StyledMaxWidthWrapper>
          <ContentColumn variant={1}>
            <Subtitle>Juices</Subtitle>
            <Title>Fruit and Vegetable Juices:</Title>
            <Text>
              Freshly made off the menu or to order. Available as Daily Detox, Simple Juice, Easy Greens, and Raw6
              Categories.
            </Text>
            <ButtonContainer>
              <Button>see the menu</Button>
              <ButtonOutlined>see the menu</ButtonOutlined>
            </ButtonContainer>
          </ContentColumn>
          <RedColumn variant={1}>
            {isMobile ? (
              <FloatingImage top="2%" left="25%" alt="icon" width="125px" src="/images/Icon (8).svg" height="125px" />
            ) : (
              <FloatingImage
                top="0%"
                right="20%"
                alt="icon"
                height="clamp(249px, 22.02vw, 333px)"
                src="/images/Icon (8).svg"
                width="clamp(249px, 22.02vw, 333px)"
              />
            )}
          </RedColumn>
          <ImageColumn variant={1}>
            <FloatingImage
              alt="image"
              style={{ zIndex: 1 }}
              width="clamp(312px, 51.12vw, 773px)"
              src="/images/Sweet Kale Immunity Bottle.png"
              height="clamp(242px, 29.56vw, 447px)"
            />
            <FloatingImage
              right="44%"
              style={{ zIndex: -1 }}
              top="-37%"
              alt="bg"
              width="clamp(396px, 46.69vw, 706px)"
              src="/images/Mask group (6).png"
              height="clamp(384px, 45.23vw, 684px)"
            />
          </ImageColumn>
        </StyledMaxWidthWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MenuItems;
