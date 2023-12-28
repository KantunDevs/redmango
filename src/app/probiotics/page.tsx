import BacteriaInfo from '@components/pages/SmoothieFactory/Probiotics/BacteriaInfo/BacteriaInfo';
import GoWithYourGut from '@components/pages/SmoothieFactory/Probiotics/GoWithYourGut/GoWithYourGut';
import HealthBenefits from '@components/pages/SmoothieFactory/Probiotics/HealthBenefits/HealthBenefits';
import ProbioticsHeader from '@components/pages/SmoothieFactory/Probiotics/ProbioticsHeader/ProbioticsHeader';
import RedBanner from '@components/pages/SmoothieFactory/Probiotics/RedBanner/RedBanner';
import SuperBiotics from '@components/pages/SmoothieFactory/Probiotics/SuperBiotics/SuperBiotics';

import type { FC } from 'react';

export const metadata = {
  title: 'Probiotics | Red Mango',
};

const Probiotics: FC = () => (
  <>
    <ProbioticsHeader />
    <HealthBenefits />
    <RedBanner />
    <SuperBiotics />
    <BacteriaInfo />
    <GoWithYourGut />
  </>
);

export default Probiotics;
