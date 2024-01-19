'use client';

import Image from 'next/image';

import {
  BgWrapper,
  Glass,
  Column,
  Row,
  Card,
  Hashtag,
  Thumbnail,
  CardContent,
  CardTitle,
  CardText,
  FollowUs,
  SocialLink,
  FollowUsTitle,
  SocialLinksWrapper,
  Carousel,
  CardColumn,
  CarouselWrapper,
  Icon,
  IconWrapper,
} from './LetsConnect.style';

import { MaxWidthWrapper } from '@styles/common';
import { Title } from '../common';

import type { FC } from 'react';
import { HomepageLetsConnectSlice } from 'prismicio-types';
import { PrismicNextImage } from '@prismicio/next';

const LetsConnect: FC<{ slice: HomepageLetsConnectSlice }> = ({
  slice: {
    items,
    primary: { title, hashtag },
  },
}) => (
  <>
    <BgWrapper>
      <Glass>
        <MaxWidthWrapper>
          <Row>
            <Column>
              <Title mb="8px" color="#421B00" dangerouslySetInnerHTML={{ __html: title as string }}></Title>
              <Hashtag dangerouslySetInnerHTML={{ __html: hashtag as string }}></Hashtag>
            </Column>
            <CarouselWrapper>
              <Carousel>
                {items.map(({ card_image, card_title, card_text }, index) => (
                  <CardColumn key={index}>
                    <Card>
                      <Thumbnail>
                        <PrismicNextImage
                          field={card_image}
                          style={{ objectFit: 'cover', pointerEvents: 'none' }}
                          fill
                        />
                      </Thumbnail>
                      <CardContent>
                        <IconWrapper>
                          <Icon>
                            <Image alt="logo" src="/images/Vector (4).svg" height="35" width="36" />
                          </Icon>
                          <CardTitle dangerouslySetInnerHTML={{ __html: card_title as string }}></CardTitle>
                        </IconWrapper>
                        <CardText dangerouslySetInnerHTML={{ __html: card_text as string }}></CardText>
                      </CardContent>
                    </Card>
                  </CardColumn>
                ))}
              </Carousel>
            </CarouselWrapper>
          </Row>
        </MaxWidthWrapper>
      </Glass>
    </BgWrapper>
    <MaxWidthWrapper>
      <FollowUs>
        <FollowUsTitle>.... follow us on:</FollowUsTitle>
        <SocialLinksWrapper>
          <SocialLink href="https://www.facebook.com/orangeleaf" target="_blank">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#CB333B" />
              <path
                d="M23.7188 21L24.1562 18.125H21.375V16.25C21.375 15.4375 21.75 14.6875 23 14.6875H24.2812V12.2188C24.2812 12.2188 23.125 12 22.0312 12C19.75 12 18.25 13.4062 18.25 15.9062V18.125H15.6875V21H18.25V28H21.375V21H23.7188Z"
                fill="white"
              />
            </svg>
          </SocialLink>
          <SocialLink href="https://twitter.com/orangeleaf" target="_blank">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#CB333B" />
              <path
                d="M26.3438 16.75C26.9688 16.2812 27.5312 15.7188 27.9688 15.0625C27.4062 15.3125 26.75 15.5 26.0938 15.5625C26.7812 15.1562 27.2812 14.5312 27.5312 13.75C26.9062 14.125 26.1875 14.4062 25.4688 14.5625C24.8438 13.9062 24 13.5312 23.0625 13.5312C21.25 13.5312 19.7812 15 19.7812 16.8125C19.7812 17.0625 19.8125 17.3125 19.875 17.5625C17.1562 17.4062 14.7188 16.0938 13.0938 14.125C12.8125 14.5938 12.6562 15.1562 12.6562 15.7812C12.6562 16.9062 13.2188 17.9062 14.125 18.5C13.5938 18.4688 13.0625 18.3438 12.625 18.0938V18.125C12.625 19.7188 13.75 21.0312 15.25 21.3438C15 21.4062 14.6875 21.4688 14.4062 21.4688C14.1875 21.4688 14 21.4375 13.7812 21.4062C14.1875 22.7188 15.4062 23.6562 16.8438 23.6875C15.7188 24.5625 14.3125 25.0938 12.7812 25.0938C12.5 25.0938 12.25 25.0625 12 25.0312C13.4375 25.9688 15.1562 26.5 17.0312 26.5C23.0625 26.5 26.3438 21.5312 26.3438 17.1875C26.3438 17.0312 26.3438 16.9062 26.3438 16.75Z"
                fill="white"
              />
            </svg>
          </SocialLink>
          <SocialLink href="https://www.instagram.com/orangeleaf/" target="_blank">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#CB333B" />
              <path
                d="M23.7188 21L24.1562 18.125H21.375V16.25C21.375 15.4375 21.75 14.6875 23 14.6875H24.2812V12.2188C24.2812 12.2188 23.125 12 22.0312 12C19.75 12 18.25 13.4062 18.25 15.9062V18.125H15.6875V21H18.25V28H21.375V21H23.7188Z"
                fill="white"
              />
            </svg>
          </SocialLink>
        </SocialLinksWrapper>
      </FollowUs>
    </MaxWidthWrapper>
  </>
);

export default LetsConnect;
