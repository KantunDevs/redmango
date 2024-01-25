import BacteriaInfo from '@components/pages/SmoothieFactory/Probiotics/BacteriaInfo/BacteriaInfo';
import GoWithYourGut from '@components/pages/SmoothieFactory/Probiotics/GoWithYourGut/GoWithYourGut';
import HealthBenefits from '@components/pages/SmoothieFactory/Probiotics/HealthBenefits/HealthBenefits';
import ProbioticsHeader from '@components/pages/SmoothieFactory/Probiotics/ProbioticsHeader/ProbioticsHeader';
import RedBanner from '@components/pages/SmoothieFactory/Probiotics/RedBanner/RedBanner';
import SuperBiotics from '@components/pages/SmoothieFactory/Probiotics/SuperBiotics/SuperBiotics';
import { createClient } from 'prismicio';
import {
  BacteriaInfoSlice,
  HealthBenefitsSlice,
  ProbioticsHeaderSlice,
  RedBannerSlice,
  SuperBioticsSlice,
  GoWithYourGutSlice,
} from 'prismicio-types';

import type { FC } from 'react';

export const metadata = {
  title: 'Probiotics | Red Mango',
};

/* @ts-expect-error Server Component */
const Probiotics: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('probiotics');

  const probioticsHeaderSlice = page.data.slices.find((slice) => slice.slice_type === 'probiotics_header') as
    | ProbioticsHeaderSlice
    | undefined;

  const healthBenefits = page.data.slices.find((slice) => slice.slice_type === 'health_benefits') as
    | HealthBenefitsSlice
    | undefined;

  const redBanner = page.data.slices.find((slice) => slice.slice_type === 'red_banner') as RedBannerSlice | undefined;

  const superBiotics = page.data.slices.find((slice) => slice.slice_type === 'super_biotics') as
    | SuperBioticsSlice
    | undefined;

  const bacteriaInfo = page.data.slices.find((slice) => slice.slice_type === 'bacteria_info') as
    | BacteriaInfoSlice
    | undefined;

  const goWithYourGut = page.data.slices.find((slice) => slice.slice_type === 'go_with_your_gut') as
    | GoWithYourGutSlice
    | undefined;

  return (
    <>
      {probioticsHeaderSlice ? <ProbioticsHeader slice={probioticsHeaderSlice} /> : null}
      {healthBenefits ? <HealthBenefits slice={healthBenefits} /> : null}
      {redBanner ? <RedBanner slice={redBanner} /> : null}
      {superBiotics ? <SuperBiotics slice={superBiotics} /> : null}
      {bacteriaInfo ? <BacteriaInfo slice={bacteriaInfo} /> : null}
      {goWithYourGut ? <GoWithYourGut slice={goWithYourGut} /> : null}
    </>
  );
};

export default Probiotics;
