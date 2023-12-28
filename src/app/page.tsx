import OurStars from '@components/pages/SmoothieFactory/Home/OurStars/OurStars';
import Gallery from '@components/pages/SmoothieFactory/Home/Gallery/Gallery';
import Header from '@components/pages/SmoothieFactory/Home/Header/Header';

import WhatIsNew from '@components/pages/SmoothieFactory/Home/WhatIsNew/WhatIsNew';
import Probiotics from '@components/pages/SmoothieFactory/Home/Probiotics/Probiotics';
import JoinOurClub from '@components/pages/SmoothieFactory/Home/JoinOurClub/JoinOurClub';

import type { FC } from 'react';

export const metadata = {
  title: 'Smoothie Factory® | A smoothie bar and nutrition supplement franchise company',
};

const Home: FC = () => (
  <>
    <Header />
    <WhatIsNew />
    <Gallery mb="clamp(48px, 10.18vw, 154px)" />
    <OurStars />
    <Probiotics />
    <JoinOurClub />
  </>
);

export default Home;
