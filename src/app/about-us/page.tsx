import AboutUsForm from '@components/pages/SmoothieFactory/AboutUs/Form/AboutUsForm';
import Header from '@components/pages/SmoothieFactory/AboutUs/Header/Header';
import HowItStarted from '@components/pages/SmoothieFactory/AboutUs/HowItStarted/HowItStarted';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import { AboutUsFormSlice, AboutUsHeaderSlice, HowItStartedSlice } from 'prismicio-types';

import type { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('aboutus');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

/* @ts-expect-error Server Component */
const AboutUs: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('aboutus');

  const aboutUsHeader = page.data.slices.find((slice) => slice.slice_type === 'about_us_header') as
    | AboutUsHeaderSlice
    | undefined;

  const howItStarted = page.data.slices.find((slice) => slice.slice_type === 'how_it_started') as
    | HowItStartedSlice
    | undefined;

  const aboutUsForm = page.data.slices.find((slice) => slice.slice_type === 'about_us_form') as
    | AboutUsFormSlice
    | undefined;

  return (
    <>
      {aboutUsHeader ? <Header slice={aboutUsHeader} /> : null}
      {howItStarted ? <HowItStarted slice={howItStarted} /> : null}
      {aboutUsForm ? <AboutUsForm slice={aboutUsForm} /> : null}
    </>
  );
};

export default AboutUs;
