import AboutSection from '@components/pages/RedMango/Franchising/AboutSection';
import GetStartedSection from '@components/pages/RedMango/Franchising/GetStartedSection';
import HeaderSection from '@components/pages/RedMango/Franchising/HeaderSection';
import HowToSection from '@components/pages/RedMango/Franchising/HowToSection';
import MenuSection from '@components/pages/RedMango/Franchising/MenuSection';
import PurposeSection from '@components/pages/RedMango/Franchising/PurposeSection';
import VideoSection from '@components/pages/RedMango/Franchising/VideoSection';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import {
  FranchisingAboutSectionSlice,
  FranchisingGetStartedSectionSlice,
  FranchisingHeaderSlice,
  FranchisingHowToSectionSlice,
  FranchisingMenuSectionSlice,
  FranchisingPurposeSectionSlice,
  FranchisingVideoSlice,
  GetStartedSectionSlice,
} from 'prismicio-types';

import type { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('franchising');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || '',
        },
      ],
    },
  };
}

/* @ts-expect-error Server Component */
const Franchising: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('franchising');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'franchising_header') as
    | FranchisingHeaderSlice
    | undefined;

  const videoSlice = page.data.slices.find((slice) => slice.slice_type === 'franchising_video') as
    | FranchisingVideoSlice
    | undefined;

  const howToSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_how_to_section') as
    | FranchisingHowToSectionSlice
    | undefined;

  const menuSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_menu_section') as
    | FranchisingMenuSectionSlice
    | undefined;

  const purposeSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_purpose_section') as
    | FranchisingPurposeSectionSlice
    | undefined;

  const aboutSection = page.data.slices.find((slice) => slice.slice_type === 'franchising_about_section') as
    | FranchisingAboutSectionSlice
    | undefined;

  const cards = page.data.slices.filter((slice) => slice.slice_type === 'franchising_get_started_section') as
    | FranchisingGetStartedSectionSlice[]
    | undefined;

  const getStartedSection = page.data.slices.find((slice) => slice.slice_type === 'get_started_section') as
    | GetStartedSectionSlice
    | undefined;

  return (
    <>
      {headerSlice ? <HeaderSection slice={headerSlice} /> : null}
      {videoSlice ? (
        <VideoSection
          slice={videoSlice}
          url="/videos/Red Mango Testimonial NP DIGIAL CO_.mp4"
          poster="/images/red-mango-video-poster.jpeg"
        />
      ) : null}
      {howToSection ? <HowToSection slice={howToSection} /> : null}
      {menuSection ? <MenuSection slice={menuSection} /> : null}
      {purposeSection ? <PurposeSection slice={purposeSection} /> : null}
      {aboutSection ? <AboutSection slice={aboutSection} /> : null}
      {cards && getStartedSection ? <GetStartedSection cards={cards} slice={getStartedSection} /> : null}
    </>
  );
};

export default Franchising;
