'use client';

import Image from 'next/image';

import Card from '@components/ui/Card';

import {
  CardHeader,
  CardHeaderTitle,
  CardPoint,
  CardPointTitle,
  CardText,
  Column,
  Flag,
  HowToContainer,
  LineSeparator,
  MilitaryContainer,
  MilitaryContent,
  MilitaryDescription,
  MilitaryTitle,
  OptionsContainer,
  PromoOptions,
  PromotionContainer,
  PromotionDescription,
  PromotionOptionDescription,
  PromotionOptionTitle,
  PromotionSubtitle,
  PromotionTitle,
  Title,
} from './GetStartedSection.styles';

import type { FC } from 'react';
import { FranchisingGetStartedSectionSlice, GetStartedSectionSlice } from 'prismicio-types';
import { PrismicImage } from '@prismicio/react';

const Point: FC<{ color: string }> = ({ color }) => (
  <svg
    fill="none"
    height="12"
    style={{ minWidth: '35px' }}
    viewBox="0 0 35 12"
    width="35"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill={color} height="12" rx="6" width="35" />
  </svg>
);

const GetStartedSection: FC<{ cards: FranchisingGetStartedSectionSlice[]; slice: GetStartedSectionSlice }> = ({
  cards,
  slice: {
    primary: {
      title,
      promotion_title,
      promotion_subtitle,
      promotion_description,
      promotion_option_title,
      promotion_option_description,
      promotion_option_title_2,
      promotion_option_description_2,
      military_title,
      military_description,
      show_promotion,
      military_image,
    },
  },
}) => (
  <>
    <HowToContainer>
      <Title dangerouslySetInnerHTML={{ __html: title as string }}></Title>
      <OptionsContainer>
        {cards.map(({ primary: { icon, color, title, subtitle }, items }, index) => (
          <Column key={index}>
            <Card size="m">
              <CardHeader>
                <PrismicImage field={icon} width="80px" />
                <div>
                  <CardHeaderTitle dangerouslySetInnerHTML={{ __html: title as string }}></CardHeaderTitle>
                  <CardText dangerouslySetInnerHTML={{ __html: subtitle as string }}></CardText>
                </div>
              </CardHeader>

              {items.map(({ title, text }, index) => (
                <CardPoint key={index}>
                  <Point color={color as string} />
                  <div>
                    <CardPointTitle dangerouslySetInnerHTML={{ __html: title as string }}></CardPointTitle>
                    <CardText dangerouslySetInnerHTML={{ __html: text as string }}></CardText>
                  </div>
                </CardPoint>
              ))}
            </Card>
          </Column>
        ))}
      </OptionsContainer>
    </HowToContainer>
    {show_promotion ? (
      <PromotionContainer>
        <PromotionTitle dangerouslySetInnerHTML={{ __html: promotion_title as string }}></PromotionTitle>
        <PromotionSubtitle dangerouslySetInnerHTML={{ __html: promotion_subtitle as string }}></PromotionSubtitle>
        <PromotionDescription
          dangerouslySetInnerHTML={{ __html: promotion_description as string }}
        ></PromotionDescription>
        <PromoOptions>
          <div>
            <PromotionOptionTitle
              dangerouslySetInnerHTML={{ __html: promotion_option_title as string }}
            ></PromotionOptionTitle>
            <PromotionOptionDescription
              dangerouslySetInnerHTML={{ __html: promotion_option_description as string }}
            ></PromotionOptionDescription>
          </div>
          <LineSeparator />
          <div>
            <PromotionOptionTitle
              dangerouslySetInnerHTML={{ __html: promotion_option_title_2 as string }}
            ></PromotionOptionTitle>
            <PromotionOptionDescription
              dangerouslySetInnerHTML={{ __html: promotion_option_description_2 as string }}
            ></PromotionOptionDescription>
          </div>
        </PromoOptions>
      </PromotionContainer>
    ) : null}
    <MilitaryContainer>
      <MilitaryContent>
        <MilitaryTitle dangerouslySetInnerHTML={{ __html: military_title as string }}></MilitaryTitle>
        <MilitaryDescription dangerouslySetInnerHTML={{ __html: military_description as string }}></MilitaryDescription>
      </MilitaryContent>
      <Flag>
        <PrismicImage field={military_image} style={{ objectFit: 'cover', height: '100%' }} />
      </Flag>
    </MilitaryContainer>
  </>
);

export default GetStartedSection;
