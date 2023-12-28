'use client';

import Image from 'next/image';
import {
  Container,
  Content,
  Title,
  Flavors,
  FlavorItem,
  StyledMaxWidthWrapper,
  FlavorText,
  Text,
  BG,
} from './Header.style';

import type { FC } from 'react';
import { Button } from '@styles/common';

const Header: FC = () => (
  <>
    <Container>
      <StyledMaxWidthWrapper>
        <Content>
          <Title>Award winning frozen yoghurt!</Title>
          <Text>
            First to be certified by the Yogurt Asso- ciation’s Live and Active Culture Seal. 100% all-natural and
            nonfat. Certified Gluten Free and Kosher.
          </Text>
          <Button>Become a part of the family</Button>
        </Content>
        <Flavors>
          <FlavorItem>
            <FlavorText>SWEET</FlavorText>
          </FlavorItem>
          <FlavorItem>
            <FlavorText>SWEET</FlavorText>
          </FlavorItem>
          <FlavorItem>
            <FlavorText>SWEET</FlavorText>
          </FlavorItem>
          <FlavorItem>
            <FlavorText>SWEET</FlavorText>
          </FlavorItem>
        </Flavors>
      </StyledMaxWidthWrapper>
    </Container>
    <BG>
      <Image alt="first-row-image" fill src="/images/red-mango-home-header-bg.jpg" style={{ objectFit: 'cover' }} />
    </BG>
  </>
);

export default Header;
